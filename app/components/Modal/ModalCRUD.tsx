import { TouristData } from "@/app/types/model/Tourist";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import { faker } from "@faker-js/faker";

interface ModalCRUDProps {
  data?: TouristData | null;
  setData: (data: TouristData) => void;
  show: boolean;
  onDismiss: () => void;
  onSubmit: (data: TouristData) => void;
}

export default function ModalCRUD({
  show,
  data,
  setData,
  onDismiss,
  onSubmit,
}: ModalCRUDProps) {
  return (
    <Modal show={show}>
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {data?.id ? "Edit tourist" : "Add New tourist"}
        </h3>

        <Button
          onClick={onDismiss}
          type="button"
          className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-black"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </Button>
      </div>

      <form
        className="p-4 md:p-5"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data as TouristData);
        }}
      >
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <Input
              type="text"
              name="name"
              id="name"
              label="Name"
              value={data?.tourist_name}
              onChange={(e) => {
                setData({
                  ...(data as TouristData),
                  tourist_name: e,
                });
              }}
              placeholder="Type name"
              required
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>

          <div className="col-span-2">
            <Input
              type="text"
              name="email"
              id="email"
              label="Email"
              value={data?.tourist_email}
              onChange={(e) => {
                setData({
                  ...(data as TouristData),
                  tourist_email: e,
                });
              }}
              placeholder="Type email"
              required
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>

          <div className="col-span-2">
            <Input
              type="text"
              name="location"
              id="location"
              label="Location"
              value={data?.tourist_location}
              onChange={(e) => {
                setData({
                  ...(data as TouristData),
                  tourist_location: e,
                });
              }}
              placeholder="Type location"
              required
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
        </div>

        <div
          className={`flex items-center space-x-3 mt-5 ${
            data?.id == "" ? "justify-between" : "justify-end"
          }`}
        >
          {data?.id == "" && (
            <Button
              type="button"
              onClick={() => {
                setData({
                  id: "",
                  tourist_email: faker.internet.email(),
                  tourist_name: faker.person.fullName(),
                  tourist_profilepicture: faker.image.avatar(),
                  tourist_location: faker.location.city(),
                });
              }}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate
            </Button>
          )}

          <Button
            type="submit"
            className={`text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              data?.id
                ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300"
                : "bg-green-700 hover:bg-green-800 focus:ring-green-300"
            } dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {data?.id ? "Edit tourist" : "Create tourist"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
