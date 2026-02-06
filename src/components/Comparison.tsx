import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const rows = [
    { feature: "Answers", typical: "Generic answers", ours: "Context-aware intelligence" },
    { feature: "Memory", typical: "Stateless chats", ours: "Persistent organizational memory" },
    { feature: "Governance", typical: "No governance", ours: "Enterprise RBAC & validation" },
    { feature: "Approach", typical: "AI replaces humans", ours: "AI amplifies experts" },
    { feature: "Traceability", typical: "Black box outputs", ours: "Full source attribution" },
];

const Comparison = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow-bottom" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Comparison</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                        Why not just
                        <br />
                        <span className="text-gradient">another AI tool?</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-card-strong rounded-3xl overflow-hidden glow-border"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[650px]">
                            <thead>
                                <tr className="border-b border-[#1f2937]">
                                    <th className="py-6 px-8 text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.2em] w-[20%]" />
                                    <th className="py-6 px-8 text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">
                                        <div className="flex items-center gap-2">
                                            <div className="size-5 rounded-md bg-[#1f2937] flex items-center justify-center">
                                                <X className="size-3 text-[#9ca3af]" />
                                            </div>
                                            Typical AI Tools
                                        </div>
                                    </th>
                                    <th className="py-6 px-8 text-[11px] font-bold text-[#38b6ff] uppercase tracking-[0.2em] bg-[#38b6ff]/[0.03]">
                                        <div className="flex items-center gap-2">
                                            <div className="size-5 rounded-md bg-[#38b6ff]/15 flex items-center justify-center">
                                                <Check className="size-3 text-[#38b6ff]" />
                                            </div>
                                            Conqrai Platform
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, idx) => (
                                    <tr key={idx} className={idx < rows.length - 1 ? 'border-b border-[#1f2937]/50' : ''}>
                                        <td className="py-5 px-8 text-xs font-bold text-white uppercase tracking-wider">{row.feature}</td>
                                        <td className="py-5 px-8 text-[14px] text-[#6b7280] font-medium">{row.typical}</td>
                                        <td className="py-5 px-8 text-[14px] text-white font-semibold bg-[#38b6ff]/[0.03]">{row.ours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Comparison;
