import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cd = (...inputs) => twMerge(clsx(inputs));
