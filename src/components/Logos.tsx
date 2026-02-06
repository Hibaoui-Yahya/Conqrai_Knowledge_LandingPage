import { motion } from 'framer-motion';
import { Factory, Plane, Bolt, FlaskConical, Building2 } from 'lucide-react';

const industries = [
    { icon: Factory, name: "Engineering & Manufacturing" },
    { icon: Plane, name: "Aerospace & Automotive" },
    { icon: Bolt, name: "Energy & Infrastructure" },
    { icon: FlaskConical, name: "R&D and Operations" },
    { icon: Building2, name: "Digital Transformation Offices" },
];

const WhoItsFor = () => {
    return (
        <section id="industries" className="relative py-28 bg-[#0e1117] overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-6">
                        Built for teams where
                        <br />
                        <span className="text-[#38b6ff]">decisions matter.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111827]/40 border border-[#1f2937] hover:border-[#38b6ff]/20 transition-colors text-center"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff]">
                                <ind.icon size={22} />
                            </div>
                            <span className="text-sm font-semibold text-[#9ca3af] leading-tight">{ind.name}</span>
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
                    If your organization is complex — <span className="text-[#e5e7eb] font-semibold">this was built for you.</span>
                </motion.p>
            </div>
        </section>
    );
};

export default WhoItsFor;
