"use client";

import useSwr from "swr";
import useSwrMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { API } from "./lib/consts";
import {
  getTourists,
  deleteTourist,
  updateTourist,
  createTourist,
} from "./lib/fetcher/tourist";
import { TouristData } from "./types/model/Tourist";
import {
  Button,
  Table,
  Navbar,
  Pagination,
  Shimmer,
  ModalCRUD,
  ModalDelete,
} from "./components/_Index";

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [crud, setCrud] = useState<TouristData | null>(null);
  const [del, setDel] = useState<TouristData | null>(null);

  const { data, isLoading, mutate } = useSwr([API.tourist, page], getTourists);

  const { trigger: triggerCreate } = useSwrMutation(
    API.tourist,
    createTourist,
    {
      onSuccess: () => {
        setCrud(null);
        mutate();
        toast.success("Data created successfully");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    }
  );

  const { trigger: triggerDelete } = useSwrMutation(
    API.tourist,
    deleteTourist,
    {
      onSuccess: () => {
        setDel(null);
        mutate();
        toast.success("Data deleted successfully");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    }
  );

  const { trigger: triggerEdit } = useSwrMutation(API.tourist, updateTourist, {
    onSuccess: () => {
      setCrud(null);
      mutate();
      toast.success("Data updated successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <div>
      <Navbar />

      <ModalDelete
        show={del !== null}
        data={del}
        onDismiss={() => setDel(null)}
        onDelete={() => {
          triggerDelete(del?.id!!);
        }}
      />

      <ModalCRUD
        data={crud}
        setData={setCrud}
        show={crud !== null}
        onDismiss={() => {
          setCrud(null);
        }}
        onSubmit={(data) => {
          if (data.id) {
            triggerEdit(data);
          } else {
            triggerCreate(data);
          }
        }}
      />

      <section className="max-w-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen lg:px-12">
          <div className="bg-white p-4 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Button
                  onClick={() => {
                    setCrud({} as TouristData);
                  }}
                  type="button"
                  className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add Data
                </Button>
              </div>
            </div>
          </div>

          {isLoading &&
            [...Array(10)].map((_, index) => (
              <Shimmer key={index} className="w-full" />
            ))}

          {!isLoading && (
            <Table
              column={[
                { key: "tourist_profilepicture", name: "Picture" },
                { key: "tourist_name", name: "Name" },
                { key: "tourist_email", name: "Email" },
                { key: "tourist_location", name: "Location" },
              ]}
              data={data?.data || []}
              onClick={(item) => {
                const data = item as TouristData;
                router.push(`/tourist/${data?.id} `);
              }}
              onDelete={(item) => {
                setDel(item as TouristData);
              }}
              onEdit={(item) => {
                setCrud(item as TouristData);
              }}
            />
          )}

          <Pagination
            setPage={setPage}
            page={page}
            perPage={10}
            maxData={data?.totalrecord || 0}
            onNext={() =>
              !isLoading && setPage(Math.min(page + 1, data?.total_pages || 1))
            }
            onPrev={() => !isLoading && setPage(Math.max(page - 1, 1))}
          />
        </div>
      </section>
    </div>
  );
}
