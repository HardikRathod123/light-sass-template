import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

const navLinks = [
    { title: "About", href: "#" },
    { title: "Features", href: "#" },
    { title: "Customers", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Help", href: "#" },
    { title: "Careers", href: "#" },
];

export const Footer = () => {
    return (
        <footer className="bg-black py-10 text-center text-sm text-white/70">
            <div className="container">
                <div className="relative inline-flex before:absolute before:bottom-0 before:top-3 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
                    <Image src={Logo} alt="Logo" className="relative size-10" />
                </div>
                <nav className="mt-5 flex flex-col justify-center gap-6 md:flex-row">
                    {navLinks.map(({ title, href }, index) => (
                        <a key={index} href={href}>
                            {title}
                        </a>
                    ))}
                </nav>
                <div className="mt-6 flex justify-center gap-6">
                    <SocialX />
                    <SocialInsta />
                    <SocialLinkedIn />
                    <SocialPin />
                    <SocialYoutube />
                </div>
                <p className="mt-6">
                    &copy; 2024 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
