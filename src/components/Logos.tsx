import { motion } from 'framer-motion';
import { Factory, Plane, Bolt, FlaskConical, Building2 } from 'lucide-react';

const industries = [
    { icon: Factory, name: "Engineering & Manufacturing", desc: "Unify SOPs, maintenance procedures, and field knowledge." },
    { icon: Plane, name: "Aerospace & Automotive", desc: "Ensure compliance with traceable, validated answers." },
    { icon: Bolt, name: "Energy & Infrastructure", desc: "Preserve decades of operational expertise digitally." },
    { icon: FlaskConical, name: "R&D and Operations", desc: "Accelerate innovation with connected research data." },
    { icon: Building2, name: "Digital Transformation", desc: "Bridge the gap between legacy systems and modern AI." },
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

                {/* Bento layout - 2 large + 3 small */}
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
                            <div className="size-12 rounded-2xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] mb-5 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                <ind.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{ind.name}</h3>
                            <p className="text-sm text-[#9ca3af] font-medium leading-relaxed">{ind.desc}</p>
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
