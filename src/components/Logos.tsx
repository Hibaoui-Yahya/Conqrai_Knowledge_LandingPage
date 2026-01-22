
const Logos = () => {
    // These are generic industrial sectors for enterprise trust
    const industries = [
        "Aerospace & Defense",
        "Oil & Energy",
        "Automotive Manufacturing",
        "Pharmaceuticals",
        "Infrastructure",
        "Heavy Engineering"
    ];

    return (
        <section className="py-12 border-y border-slate-100 bg-white/50">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center mb-8">
                    Engineered for mission-critical operations in
                </p>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {industries.map((name, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-default">
                            <div className="size-8 rounded bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                {name.charAt(0)}
                            </div>
                            <span className="text-[12px] font-bold text-slate-600 tracking-tight">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
