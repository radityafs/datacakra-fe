"use client";

import Link from "next/link";
import React, { FormEvent } from "react";
import useSWRMutation from "swr/mutation";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authRegister } from "@/app/lib/fetcher/auth";
import { API } from "@/app/lib/consts";
import { Button, Input } from "@/app/components/_Index";

function Home() {
  const router = useRouter();

  const { trigger } = useSWRMutation(API.register, authRegister, {
    onSuccess: (data) => {
      if (data?.data) {
        toast.success("Account created successfully");
        router.push("/auth/login");
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    trigger({
      name: e.currentTarget.full_name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };

  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign Up to your account
      </h2>

      <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
        <Input
          label="Full Name"
          id="name"
          name="full_name"
          type="text"
          autoComplete="name"
          placeholder="John Doe"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mt-2"
          required
        />

        <Input
          label="Email address"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="john@doe.com"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mt-2"
          required
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          autoComplete="current-password"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mt-2"
          required
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm px-4 py-2 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2"
        >
          Sign Up
        </Button>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Home;
