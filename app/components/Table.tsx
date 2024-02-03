import Image from "next/image";
import Button from "./Button";

interface Column {
  name: string;
  key: string;
}

interface TableProps {
  column: Column[];
  data: any[];
  onClick: ({}) => void;
  onDelete: ({}) => void;
  onEdit: ({}) => void;
}

export default function Table({
  column,
  data,
  onClick,
  onDelete,
  onEdit,
}: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            {column.map((item) => {
              return (
                <th scope="col" className="px-6 py-3">
                  {item.name}
                </th>
              );
            })}

            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                {column.map((col) => {
                  if (
                    item[col.key] &&
                    item[col.key].match(/\bhttps?:\/\/\S+\.(png|jpe?g|gif)\b/)
                  ) {
                    return (
                      <td className="py-4 px-6" key={col.key}>
                        <Image
                          src={item[col.key]}
                          alt={item[col.key]}
                          className="h-10 w-10 rounded-full object-cover mx-auto"
                          width={40}
                          height={40}
                        />
                      </td>
                    );
                  }
                  return (
                    <td className="px-6 py-4" key={col.key}>
                      {item[col.key]}
                    </td>
                  );
                })}

                <td className="px-6 py-4">
                  <div className="flex items-center justify-end space-x-4">
                    <Button
                      type="button"
                      className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      onClick={() => onClick(item)}
                    >
                      View
                    </Button>

                    <Button
                      type="button"
                      className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </Button>

                    <Button
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
                      onClick={() => onDelete(item)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
