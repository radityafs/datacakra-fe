"use client";

import React, { FormEvent } from "react";
import useSWRMutation from "swr/mutation";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import cookie from "@/app/lib/cookie/cookie";
import { authLogin } from "@/app/lib/fetcher/auth";
import { API } from "@/app/lib/consts";
import { Button, Input } from "@/app/components/_Index";

export default function Home() {
  const router = useRouter();
  const { trigger } = useSWRMutation(API.login, authLogin, {
    onSuccess: (data) => {
      if (data?.data) {
        cookie.set("token", data.data.Token);
        toast.success("Logged in successfully");
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    trigger({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };

  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <form className="space-y-6" method="POST" onSubmit={onSubmit}>
        <Input
          label="Email address"
          id="email"
          name="email"
          type="email"
          placeholder="john@doe.com"
          autoComplete="email"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mt-2"
          required
        />

        <Input
          label="Password"
          id="password"
          name="password"
          placeholder="********"
          type="password"
          autoComplete="current-password"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mt-2"
          required
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-4 py-2 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2"
        >
          Sign in
        </Button>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{" "}
        <Link
          href="/auth/register"
          className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
