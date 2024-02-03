import { TouristData } from "@/app/types/model/Tourist";
import fetcher from "../fetcher";
import objectToFormData from "../object/object";

interface getTouristsResponse {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: TouristData[];
}

export async function getTourists([key, page]: [string, number]) {
  const result = await fetcher(`${key}?page=${page}`, {
    method: "GET",
  });

  return result as getTouristsResponse;
}

export async function getTouristById([key, id]: [string, string]) {
  const result = await fetcher(`${key}/${id}`, {
    method: "GET",
  });

  return result as TouristData;
}

export async function createTourist(
  key: string,
  { arg: data }: { arg: TouristData }
) {
  const result = await fetcher(`${key}`, {
    method: "POST",
    body: objectToFormData(data),
  });

  return result as TouristData;
}

export async function updateTourist(
  key: string,
  { arg: data }: { arg: TouristData }
) {
  const result = await fetcher(`${key}/${data.id}`, {
    method: "PUT",
    body: objectToFormData(data),
  });

  return result as TouristData;
}

export async function deleteTourist(key: string, { arg }: { arg: string }) {
  const result = await fetcher(`${key}/${arg}`, {
    method: "DELETE",
  });

  return result as TouristData;
}
