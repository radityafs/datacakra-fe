import cookie from "./cookie/cookie";

export default async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const token = cookie.get("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token ? `Bearer ${token}` : "",
        ...options?.headers,
      },
      ...options,
    });
    const data = await res.json();

    if (res.status === 401) {
      if (window.location.pathname !== "/auth/login") {
        cookie.delete("token");
        window.location.href = "/auth/login";
      }
    }

    if (res.status === 404) {
      throw new Error("Not Found");
    }

    if (res.status === 500) {
      throw new Error("Internal Server Error");
    }

    return data;
  } catch (e) {
    throw e;
  }
}
