"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { Button } from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            className="overflow-x-clip bg-gradient-to-b from-white to-indigo-200 py-24"
            ref={sectionRef}
        >
            <div className="container">
                <div className="section-heading relative">
                    <h2 className="section-title">Sign up for free today</h2>
                    <p className="section-description mt-4">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts.
                    </p>
                    <motion.img
                        className="absolute -left-[350px] -top-[137px] hidden size-[360px] md:block"
                        alt="Star image"
                        src={starImage.src}
                        style={{ translateY }}
                    />
                    <motion.img
                        className="absolute -right-[331px] -top-[20px] size-[360px]"
                        alt="Spring image"
                        src={springImage.src}
                        style={{ translateY }}
                    />
                </div>
                <div className="mt-10 flex justify-center gap-2">
                    <Button>Get for free</Button>
                    <Button variant={"ghost"}>
                        <span>Learn more</span>
                        <ArrowRight className="size-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
