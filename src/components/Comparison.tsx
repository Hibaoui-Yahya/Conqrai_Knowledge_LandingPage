import { motion } from 'framer-motion';

const rows = [
    {
        feature: "Answers",
        typical: "Generic answers",
        ours: "Context-aware intelligence",
    },
    {
        feature: "Memory",
        typical: "Stateless chats",
        ours: "Persistent organizational memory",
    },
    {
        feature: "Governance",
        typical: "No governance",
        ours: "Enterprise RBAC & validation",
    },
    {
        feature: "Approach",
        typical: "AI replaces humans",
        ours: "AI amplifies experts",
    },
];

const Comparison = () => {
    return (
        <section className="relative py-28 bg-[#0b0f14] overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-6">
                        Why not just
                        <br />
                        <span className="text-[#38b6ff]">another AI tool?</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="overflow-x-auto rounded-2xl border border-[#1f2937] bg-[#111827]/60"
                >
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-[#1f2937]">
                                <th className="py-5 px-6 text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]" />
                                <th className="py-5 px-6 text-[11px] font-bold text-[#9ca3af] uppercase tracking-[0.2em]">Typical AI Tools</th>
                                <th className="py-5 px-6 text-[11px] font-bold text-[#38b6ff] uppercase tracking-[0.2em] bg-[#38b6ff]/5">Conqrai</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className={idx < rows.length - 1 ? 'border-b border-[#1f2937]/60' : ''}>
                                    <td className="py-5 px-6 text-sm font-bold text-[#e5e7eb] uppercase tracking-wider">{row.feature}</td>
                                    <td className="py-5 px-6 text-[15px] text-[#9ca3af] font-medium">{row.typical}</td>
                                    <td className="py-5 px-6 text-[15px] text-[#e5e7eb] font-semibold bg-[#38b6ff]/5">{row.ours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default Comparison;
