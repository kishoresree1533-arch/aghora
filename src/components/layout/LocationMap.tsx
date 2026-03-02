import { MapPin } from "lucide-react";

const LocationMap = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <span className="text-sm font-bold tracking-[0.3em] text-secondary uppercase block mb-4">Visit Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none mb-6">
                                Our <span className="text-secondary">Office</span>
                            </h2>
                            <div className="flex gap-4 p-6 bg-grey-50 rounded-2xl border border-primary/5">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-primary font-bold text-lg mb-1">Coimbatore HQ</p>
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        65-67, 3rd Floor, VKK Menon Road,<br />
                                        (Above Central Bank of India),<br />
                                        New Sidhapudur, Coimbatore - 641044
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Aghora+Design+Academy+MEP+Coimbatore+VKK+Menon+Road"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-8 h-16 bg-primary text-white font-black rounded-2xl text-xs tracking-widest uppercase shadow-xl hover:bg-primary/90 transition-all hover:scale-[1.02]"
                        >
                            Get Directions
                        </a>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=Aghora%20Design%20Academy%20Coimbatore%20VKK%20Menon%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[0.6rem] font-bold tracking-widest uppercase text-primary border border-primary/10 shadow-lg pointer-events-none">
                                Interactive Map
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
