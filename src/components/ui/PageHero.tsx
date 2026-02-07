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
    description?: string;
    backgroundImage: string;
    badge?: string;
    curvedBottom?: boolean;
    buttons?: HeroButton[];
    variant?: "default" | "clean";
}

const PageHero = ({
    title,
    subtitle,
    description,
    backgroundImage,
    badge,
    curvedBottom = false,
    buttons,
    variant = "default"
}: PageHeroProps) => {
    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {variant === "default" ? (
                    <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
                ) : (
                    <div className="absolute inset-0 bg-primary/50" />
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center pt-20">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md rounded-full mb-8 border border-secondary/30 animate-fade-in">
                        <span className="text-[0.65rem] font-bold tracking-[0.4em] text-secondary uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter uppercase max-w-5xl mx-auto">
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
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in animation-delay-200">
                        {description}
                    </p>
                )}

                {buttons && buttons.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-300">
                        {buttons.map((btn, idx) => (
                            <Button
                                key={idx}
                                asChild
                                size="lg"
                                variant={btn.variant || "default"}
                                className={`${btn.variant === "outline"
                                    ? "bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary"
                                    : "bg-secondary hover:bg-secondary/90 text-primary"
                                    } font-black rounded-none px-10 h-16 text-xs tracking-widest uppercase transition-all backdrop-blur-sm`}
                            >
                                <Link to={btn.link}>{btn.label}</Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>

            {/* Decorative Gradient Bottom - Only for default variant */}
            {variant === "default" && !curvedBottom && (
                <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
            )}

            {/* Curved Bottom Transition */}
            {curvedBottom && (
                <div className="absolute -bottom-1 left-0 right-0 h-24 bg-background rounded-t-[50px] md:rounded-t-[100px] z-20" />
            )}
        </section>
    );
};

export default PageHero;
