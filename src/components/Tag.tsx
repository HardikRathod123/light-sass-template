import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Tag = ({
    children,
    className,
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "inline-flex rounded-lg border border-black/10 px-3 py-1 text-sm font-medium tracking-tight",
                className,
            )}
        >
            {children}
        </div>
    );
};
