import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Light Saas Landing Page",
    description:
        "Light Saas Landing Page with pixel perfect design, responsive layout and animations.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="relative">
            <body className={cn(dmSans.className, "bg-[#EAEEFE] antialiased")}>
                {children}
            </body>
        </html>
    );
}
