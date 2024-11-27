import CheckIcon from "@/assets/check.svg";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="bg-white py-24">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-title">Pricing</h2>
                    <p className="section-description mt-5">
                        Free forever. Upgrade for unlimited tasks, better
                        security, and exclusive features.
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center gap-5 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(
                        ({
                            buttonText,
                            features,
                            inverse,
                            monthlyPrice,
                            popular,
                            title,
                        }) => (
                            <div
                                key={title}
                                className={cn(
                                    "w-full max-w-xs rounded-3xl border border-gray-200 p-10 shadow-[0_7px_14px_#EAEAEA]",
                                    inverse &&
                                        "border-black bg-black text-white",
                                )}
                            >
                                <div className="flex justify-between">
                                    <h3
                                        className={cn(
                                            "text-lg font-bold text-black/50",
                                            inverse && "text-white/60",
                                        )}
                                    >
                                        {title}
                                    </h3>
                                    {popular && (
                                        <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                                            <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-[30px] flex items-baseline gap-1">
                                    <span className="text-4xl font-bold leading-none tracking-tighter">
                                        ${monthlyPrice}
                                    </span>
                                    <span
                                        className={cn(
                                            "font-bold tracking-tight text-black/50",
                                            inverse && "text-white/60",
                                        )}
                                    >
                                        /month
                                    </span>
                                </div>
                                <Button
                                    className={cn(
                                        "mt-[30px] w-full",
                                        inverse && "bg-white text-black",
                                    )}
                                >
                                    {buttonText}
                                </Button>
                                <ul className="mt-8 flex flex-col gap-5">
                                    {features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="inline-flex items-center gap-4 text-sm"
                                        >
                                            <CheckIcon className="size-6" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};
