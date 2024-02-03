import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src="https://datacakra.com/wp-content/uploads/elementor/thumbs/Datacakra_Logo-oudk36detz0vvj5b2z5ktg264m2cyxvl0ci12imx8s.png"
          alt="Datacakra"
          style={{ width: "100px", height: "100px" }}
          width={100}
          height={100}
        />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{children}</div>
    </div>
  );
}
