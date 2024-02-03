import dynamic from "next/dynamic";

export const Input = dynamic(() => import("./Input"));
export const Button = dynamic(() => import("./Button"));
export const Navbar = dynamic(() => import("./Navbar"));
export const Pagination = dynamic(() => import("./Pagination"));
export const Shimmer = dynamic(() => import("./Shimmer"));
export const Table = dynamic(() => import("./Table"));
export const ModalCRUD = dynamic(() => import("./Modal/ModalCRUD"));
export const ModalDelete = dynamic(() => import("./Modal/ModalDelete"));
export const ToastifyContainer = dynamic(() => import("./ToastContainer"));
