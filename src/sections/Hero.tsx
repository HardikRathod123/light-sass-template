import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5">
            <div className="container">
                <div className="items-center md:flex">
                    <div className="md:w-[478px]">
                        <Tag>Version 2.0 is here</Tag>
                        <h1 className="mt-6 bg-gradient-to-b from-black to-blue-900 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                            Pathway to productivity
                        </h1>
                        <p className="mt-6 text-xl tracking-tight text-blue-950">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress,motivate your
                            efforts, and celebrate your successes.
                        </p>
                        <div className="mt-[30px] flex items-center gap-1">
                            <Button>Get for free</Button>
                            <Button variant={"ghost"} className="gap-1">
                                <span>Learn more</span>
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
                        <Image
                            src={cogImage}
                            alt="Cog image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-translate-x-6 lg:translate-x-0"
                        />
                        <Image
                            src={cylinderImage}
                            alt="Cylinder image"
                            className="hidden size-56 -translate-x-32 -translate-y-8 md:absolute md:block"
                        />
                        <Image
                            src={noodleImage}
                            alt="Noodle image"
                            className="hidden size-56 translate-x-[448px] translate-y-[524px] rotate-[30deg] md:absolute md:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
