import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/SplitText";

interface HeroButton {
    label: string;
    link: string;
    variant?: "default" | "outline";
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: React.ReactNode;
    backgroundImage: string;
    badge?: string;
    curvedBottom?: boolean;
    buttons?: HeroButton[];
    variant?: "default" | "clean";
    isHome?: boolean;
}

const PageHero = ({
    title,
    subtitle,
    description,
    backgroundImage,
    badge,
    curvedBottom = false,
    buttons,
    variant = "default",
    isHome = false
}: PageHeroProps) => {
    return (
        <section className={`relative ${isHome ? 'h-screen' : 'h-[70vh]'} flex items-center justify-center overflow-hidden`}>
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
            </div>

            <div className={`container mx-auto px-6 relative z-10 text-center ${isHome ? 'pt-32 md:pt-40' : 'pt-20 md:pt-24'}`}>
                {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md rounded-full mb-8 border border-secondary/30">
                        <span className="text-[0.65rem] font-bold tracking-[0.4em] text-white uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase max-w-7xl mx-auto">
                    {subtitle ? (
                        <>
                            {title} <br />
                            <SplitText
                                text={subtitle}
                                className="text-secondary"
                                delay={50}
                                duration={1.25}
                                ease="power3.out"
                                tag="span"
                            />
                        </>
                    ) : (
                        <SplitText
                            text={title}
                            className="text-white"
                            delay={50}
                            duration={1.25}
                            ease="power3.out"
                            tag="span"
                        />
                    )}
                </h1>

                {description && (
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
                        {description}
                    </p>
                )}

                {buttons && buttons.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        {buttons.map((btn, idx) => (
                            <Button
                                key={idx}
                                asChild
                                size="lg"
                                variant={btn.variant || "default"}
                                className={`${btn.variant === "outline"
                                    ? "bg-white/5 border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-md"
                                    : "bg-secondary hover:bg-secondary/90 text-primary"
                                    } font-black rounded-2xl px-12 h-16 text-xs tracking-widest uppercase shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105`}
                            >
                                <Link to={btn.link}>{btn.label}</Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent animate-bounce" />
            </div>

            {/* Curved Bottom Transition */}
            {curvedBottom && (
                <div className="absolute -bottom-1 left-0 right-0 h-24 bg-background rounded-t-[50px] md:rounded-t-[100px] z-20" />
            )}
        </section>
    );
};

export default PageHero;
