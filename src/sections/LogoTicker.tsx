"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
    return (
        <section className="bg-white py-8 md:py-12">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex flex-none gap-14 pr-14"
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {...new Array(2).fill(null).map((_, index) => (
                            <Fragment key={index}>
                                {logos.map(({ src, alt }, index) => (
                                    <Image
                                        src={src}
                                        alt={alt}
                                        key={index}
                                        className="h-8 w-auto"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
