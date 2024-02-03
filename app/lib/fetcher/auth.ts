import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/app/types/requests/auth";
import fetcher from "../fetcher";
import objectToFormData from "../object/object";

export async function authLogin(key: string, { arg }: { arg: LoginRequest }) {
  const result = await fetcher(key, {
    method: "POST",
    body: objectToFormData(arg),
  });

  return result as LoginResponse;
}

export async function authRegister(
  key: string,
  { arg }: { arg: RegisterRequest }
) {
  const result = await fetcher(key, {
    method: "POST",
    body: objectToFormData(arg),
  });

  return result as RegisterResponse;
}
