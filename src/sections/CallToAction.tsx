import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { Button } from "@/components/Button";
import Image from "next/image";

export const CallToAction = () => {
    return (
        <section className="relative bg-gradient-to-b from-white to-indigo-200 py-24">
            <Image
                className="absolute -left-[235px] -top-[50px] hidden w-[360px] md:block"
                alt="Star image"
                src={starImage}
            />
            <Image
                className="absolute -right-[215px] top-[70px] w-[360px]"
                alt="Spring image"
                src={springImage}
            />
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-title">Sign up for free today</h2>
                    <p className="section-description mt-4">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts.
                    </p>
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
