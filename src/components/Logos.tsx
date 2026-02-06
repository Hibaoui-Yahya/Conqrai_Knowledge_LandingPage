import { motion } from 'framer-motion';
import { Building4, Airplane, Flash, Microscope, Building } from 'iconsax-react';

const industries = [
    {
        icon: Building4, name: "Engineering & Manufacturing", desc: "Unify SOPs, maintenance procedures, and field knowledge.",
        stats: { value: "340+", label: "SOPs unified" }, color: "#38b6ff",
    },
    {
        icon: Airplane, name: "Aerospace & Automotive", desc: "Ensure compliance with traceable, validated answers.",
        stats: { value: "99.2%", label: "Compliance rate" }, color: "#a78bfa",
    },
    {
        icon: Flash, name: "Energy & Infrastructure", desc: "Preserve decades of operational expertise digitally.",
        stats: { value: "25yr+", label: "Knowledge preserved" }, color: "#34d399",
    },
    {
        icon: Microscope, name: "R&D and Operations", desc: "Accelerate innovation with connected research data.",
        stats: { value: "4x", label: "Faster research" }, color: "#f59e0b",
    },
    {
        icon: Building, name: "Digital Transformation", desc: "Bridge the gap between legacy systems and modern AI.",
        stats: { value: "60%", label: "Cost reduction" }, color: "#ec4899",
    },
];

const WhoItsFor = () => {
    return (
        <section id="industries" className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-dots" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#38b6ff] rounded-full opacity-[0.04] blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Industries</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
                        Built for teams where
                        <br />
                        <span className="text-gradient">decisions matter.</span>
                    </h2>
                </motion.div>

                {/* Bento layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className={`group glass-card-strong rounded-2xl p-7 card-hover ${idx < 2 ? 'lg:col-span-1' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className="size-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: `${ind.color}12`, color: ind.color }}
                                >
                                    <ind.icon size={24} variant="TwoTone" />
                                </div>
                                {/* Mini stat badge */}
                                <div className="text-right">
                                    <div className="text-lg font-black text-white leading-none">{ind.stats.value}</div>
                                    <div className="text-[9px] font-medium mt-0.5" style={{ color: ind.color }}>{ind.stats.label}</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{ind.name}</h3>
                            <p className="text-sm text-[#9ca3af] font-medium leading-relaxed">{ind.desc}</p>

                            {/* Bottom bar visual */}
                            <div className="mt-4 h-1 rounded-full bg-[#1f2937] overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${ind.color}, ${ind.color}40)` }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 text-center text-lg text-[#9ca3af] font-medium"
                >
                    If your organization is complex, <span className="text-white font-semibold">this was built for you.</span>
                </motion.p>
            </div>
        </section>
    );
};

export default WhoItsFor;
