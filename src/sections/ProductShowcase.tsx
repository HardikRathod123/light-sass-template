import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { Tag } from "@/components/Tag";
import Image from "next/image";

export const ProductShowcase = () => {
    return (
        <section className="overflow-x-clip bg-gradient-to-b from-white to-indigo-200 py-24">
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
                    <Image
                        src={pyramidImage}
                        alt="Pyramid Image"
                        className="absolute -right-36 -top-32 hidden size-72 md:block"
                    />
                    <Image
                        src={tubeImage}
                        alt="Tube Image"
                        className="absolute -left-36 bottom-24 hidden size-60 md:block"
                    />
                </div>
            </div>
        </section>
    );
};
