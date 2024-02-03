interface ModalProps {
  children: React.ReactNode;
  show: boolean;
}

export default function Modal({ children, show }: ModalProps) {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 ${
        !show && "hidden"
      }`}
    >
      <div className="relative p-4 w-full h-full max-w-md max-h-full mx-auto my-auto rounded-lg shadow-lg dark:bg-gray-700 flex items-center justify-center">
        <div className="relative bg-white rounded-lg w-full shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
