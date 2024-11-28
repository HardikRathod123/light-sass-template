"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { Tag } from "@/components/Tag";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
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
                <div className="section-heading">
                    <div className="flex justify-center">
                        <Tag>Boost your productivity</Tag>
                    </div>
                    <h2 className="section-title mt-4">
                        A more effective way to track progress
                    </h2>
                    <p className="section-description mt-5">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts.
                    </p>
                </div>
                <div className="relative">
                    <Image
                        src={productImage}
                        alt="Product Image"
                        className="mt-10"
                    />
                    <motion.img
                        src={pyramidImage.src}
                        alt="Pyramid Image"
                        className="absolute -right-36 -top-32 hidden size-72 md:block"
                        style={{ translateY }}
                    />
                    <motion.img
                        src={tubeImage.src}
                        alt="Tube Image"
                        className="absolute -left-36 bottom-24 hidden size-60 md:block"
                        style={{ translateY }}
                    />
                </div>
            </div>
        </section>
    );
};
