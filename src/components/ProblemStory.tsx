import { motion } from 'framer-motion';
import { UserX, FileText, RefreshCcw, Unplug } from 'lucide-react';

const painPoints = [
    {
        icon: UserX, title: "Expertise Walks Out", text: "Critical knowledge leaves with retiring employees and departing experts.",
        visual: (
            <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                    {[0.6, 0.4, 0.2].map((op, i) => (
                        <div key={i} className="size-6 rounded-full bg-[#38b6ff] flex items-center justify-center text-[8px] font-bold text-white border border-[#111827]" style={{ opacity: op }}>
                            {["J", "K", "L"][i]}
                        </div>
                    ))}
                </div>
                <svg className="flex-1 h-4" viewBox="0 0 100 16">
                    <motion.path d="M 0 8 L 100 8" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" fill="none"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} />
                    <motion.polygon points="95,4 100,8 95,12" fill="#ef4444" opacity="0.4"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ delay: 1.3 }} />
                </svg>
                <span className="text-[9px] text-[#ef4444]/60 font-semibold">Lost</span>
            </div>
        ),
    },
    {
        icon: FileText, title: "Data Sits Unused", text: "PDFs, schemas, and emails contain answers no one can find when needed.",
        visual: (
            <div className="mt-4 space-y-1.5">
                {["PDF", "DOC", "XLS"].map((type, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-[#1f2937] text-[#6b7280]">{type}</div>
                        <div className="flex-1 h-1 rounded-full bg-[#1f2937]">
                            <div className="h-full rounded-full bg-[#38b6ff]/20" style={{ width: `${30 + i * 10}%` }} />
                        </div>
                        <span className="text-[8px] text-[#6b7280]">Unused</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: RefreshCcw, title: "Mistakes Repeat", text: "Teams solve the same problems again because lessons aren't captured.",
        visual: (
            <div className="mt-4 relative">
                <svg className="w-full h-12" viewBox="0 0 160 40">
                    {/* Repeating pattern */}
                    {[0, 1, 2].map((i) => (
                        <g key={i}>
                            <motion.circle cx={30 + i * 50} cy={20} r={8} fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity={0.3}
                                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.2 }}
                                style={{ transformOrigin: `${30 + i * 50}px 20px` }} />
                            <circle cx={30 + i * 50} cy={20} r={2} fill="#f59e0b" opacity={0.4} />
                        </g>
                    ))}
                    <motion.path d="M 38 20 L 72 20 M 88 20 L 122 20" stroke="#f59e0b" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.3" fill="none"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6 }} />
                    <text x="145" y="22" fontSize="6" fill="#f59e0b" opacity="0.5" fontFamily="Inter">...</text>
                </svg>
            </div>
        ),
    },
    {
        icon: Unplug, title: "AI Lacks Context", text: "Generic AI tools feel disconnected from your real business operations.",
        visual: (
            <div className="mt-4">
                <div className="rounded-lg bg-[#0b0f14]/60 border border-[#1f2937]/40 p-2.5">
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="size-4 rounded bg-[#6b7280]/20 flex items-center justify-center">
                            <div className="size-1.5 rounded-full bg-[#6b7280]/40" />
                        </div>
                        <span className="text-[9px] text-[#6b7280]">Generic AI</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#1f2937] overflow-hidden mb-1">
                        <div className="h-full w-[35%] rounded-full bg-[#6b7280]/30" />
                    </div>
                    <div className="text-[8px] text-[#ef4444]/50 font-medium">Low context relevance</div>
                </div>
            </div>
        ),
    },
];

const ProblemStory = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-dots" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#38b6ff] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Why Enterprises Struggle</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                        Knowledge is everywhere.
                        <br />
                        <span className="text-gradient">Intelligence is nowhere.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group glass-card-strong rounded-2xl p-7 card-hover"
                        >
                            <div className="size-12 rounded-2xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] mb-5 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                <point.icon size={22} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{point.title}</h3>
                            <p className="text-sm text-[#9ca3af] font-medium leading-relaxed">{point.text}</p>
                            {point.visual}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16 max-w-3xl mx-auto"
                >
                    <div className="glass-card rounded-2xl p-8 text-center glow-border relative overflow-hidden">
                        {/* Decorative quotes */}
                        <div className="absolute top-3 left-6 text-4xl font-black text-[#38b6ff]/[0.06]">"</div>
                        <div className="absolute bottom-3 right-6 text-4xl font-black text-[#38b6ff]/[0.06]">"</div>
                        <p className="text-lg md:text-xl text-[#9ca3af] font-medium italic">
                            "Enterprises don't suffer from lack of data.
                            <span className="text-white font-semibold not-italic"> they suffer from lack of memory.</span>"
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStory;
