import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

const navLinks = [
    { title: "About", href: "#" },
    { title: "Features", href: "#" },
    { title: "Customers", href: "#" },
    { title: "Updates", href: "#" },
    { title: "Help", href: "#" },
];
export const Header = () => {
    return (
        <header className="sticky top-0 z-20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 bg-black py-3 text-center text-xs text-white md:text-sm">
                <p className="hidden text-center font-medium text-white/60 md:block">
                    Streamline your workflow and boost your productivity.
                </p>
                <div className="inline-flex items-center justify-center gap-1">
                    <p>Get started for free</p>
                    <ArrowRight className="inline-flex size-4 items-center justify-center" />
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image src={Logo} alt="Sass Logo" className="size-10" />
                        <MenuIcon className="size-5 md:hidden" />
                        <div className="hidden items-center gap-6 md:flex">
                            <nav className="flex items-center gap-6 font-medium tracking-tight text-black/60">
                                {navLinks.map(({ title, href }, index) => (
                                    <a key={index} href={href}>
                                        {title}
                                    </a>
                                ))}
                            </nav>
                            <button className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white">
                                Get for free
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
