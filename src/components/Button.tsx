import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium",
    {
        variants: {
            variant: {
                default: "bg-black text-white",
                secondary: "",
                outline: "",
                ghost: "text-black bg-transparent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export const Button = ({
    children,
    className,
    variant,
}: ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof buttonVariants>) => {
    return (
        <button className={cn(buttonVariants({ variant, className }))}>
            {children}
        </button>
    );
};
