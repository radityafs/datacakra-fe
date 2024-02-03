"use client";

import useSwr from "swr";
import { redirect, useRouter } from "next/navigation";

import { API } from "../../lib/consts";
import { getTouristById } from "../../lib/fetcher/tourist";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Button from "../../components/Button";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { data, isLoading, error } = useSwr(
    [API.tourist, params.slug],
    getTouristById
  );

  if (error) {
    redirect("/");
  }

  return (
    <div>
      <Navbar />

      <div className="flex mt-5 xl:mt-20 justify-center h-full">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-10">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={data?.tourist_profilepicture!!}
              width={96}
              height={96}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {data?.tourist_name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {data?.tourist_location}
            </span>
            <div className="flex mt-4 md:mt-6 space-x-3">
              <Button
                type="button"
                onClick={() => {
                  router.back();
                }}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Back
              </Button>

              <Button
                type="button"
                onClick={() => {
                  window.location.href = `mailto:${data?.tourist_email}`;
                }}
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
