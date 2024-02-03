import Button from "./Button";
import Input from "./Input";

interface Props {
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  maxData: number;
  onNext: () => void;
  onPrev: () => void;
}
export default function Pagination({
  page,
  setPage,
  perPage,
  maxData,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="flex mt-5 flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min((page - 1) * perPage + 1, maxData)}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(page * perPage, maxData)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {maxData}
        </span>{" "}
        Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0 items-center justify-center space-x-2">
        <Button
          type="button"
          onClick={onPrev}
          className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </Button>

        <Input
          type="number"
          value={page.toString()}
          onChange={(value) => setPage(parseInt(value) || 1)}
          className="w-16 h-10 text-center text-bold"
        />

        <Button
          onClick={onNext}
          type="button"
          className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
