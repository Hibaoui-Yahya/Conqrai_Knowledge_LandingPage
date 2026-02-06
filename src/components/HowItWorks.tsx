import { motion } from 'framer-motion';
import { Download, GitMerge, Zap } from 'lucide-react';
import KnowledgeFlowSVG from '@/components/visuals/KnowledgeFlowSVG';

const cards = [
    {
        icon: Download,
        step: "01",
        title: "Capture",
        desc: "Documents, diagrams, tables, expert insights. Ingested into one unified knowledge base.",
        color: "#38b6ff",
        visual: (
            <div className="mt-5 space-y-2">
                {["SOPs & Manuals", "Expert Insights", "Data Schemas"].map((label, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                        <div className="size-6 rounded-md bg-[#38b6ff]/10 flex items-center justify-center">
                            <div className="size-2 rounded-sm bg-[#38b6ff]/60" />
                        </div>
                        <div className="flex-1 h-1.5 rounded-full bg-[#1f2937] overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-[#38b6ff] to-[#38b6ff]/40"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${75 + i * 8}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                            />
                        </div>
                        <span className="text-[10px] text-[#6b7280] font-medium w-20">{label}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: GitMerge,
        step: "02",
        title: "Connect",
        desc: "Context, history, decisions, reasoning. Linked together into an intelligent graph.",
        color: "#a78bfa",
        visual: (
            <div className="mt-5 relative h-24">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Mini knowledge graph */}
                    {[
                        { x1: 100, y1: 40, x2: 40, y2: 20 },
                        { x1: 100, y1: 40, x2: 160, y2: 20 },
                        { x1: 100, y1: 40, x2: 50, y2: 65 },
                        { x1: 100, y1: 40, x2: 150, y2: 65 },
                        { x1: 40, y1: 20, x2: 160, y2: 20 },
                        { x1: 50, y1: 65, x2: 150, y2: 65 },
                    ].map((l, i) => (
                        <line key={i} {...l} stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.2" />
                    ))}
                    {[
                        { cx: 100, cy: 40, r: 8, color: "#a78bfa", opacity: 0.3 },
                        { cx: 40, cy: 20, r: 5, color: "#38b6ff", opacity: 0.25 },
                        { cx: 160, cy: 20, r: 5, color: "#34d399", opacity: 0.25 },
                        { cx: 50, cy: 65, r: 4, color: "#f59e0b", opacity: 0.2 },
                        { cx: 150, cy: 65, r: 4, color: "#ec4899", opacity: 0.2 },
                    ].map((n, i) => (
                        <g key={i}>
                            <circle cx={n.cx} cy={n.cy} r={n.r * 2} fill={n.color} opacity={n.opacity * 0.3} />
                            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity={n.opacity} />
                            <circle cx={n.cx} cy={n.cy} r={n.r * 0.5} fill={n.color} opacity={0.7} />
                        </g>
                    ))}
                </svg>
            </div>
        ),
    },
    {
        icon: Zap,
        step: "03",
        title: "Act",
        desc: "AI-assisted answers, recommendations, traceability. Delivered at the moment of need.",
        color: "#34d399",
        visual: (
            <div className="mt-5 space-y-2.5">
                <div className="rounded-lg bg-[#0b0f14]/60 border border-[#1f2937]/40 p-3">
                    <div className="flex items-start gap-2">
                        <div className="size-5 rounded-md bg-[#34d399]/15 flex items-center justify-center mt-0.5">
                            <div className="size-2 rounded-full bg-[#34d399]" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold text-white">AI Response</div>
                            <div className="text-[9px] text-[#6b7280] mt-0.5 leading-relaxed">Based on 12 validated sources with 98.2% confidence...</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                        {["#38b6ff", "#a78bfa", "#34d399"].map((c, i) => (
                            <div key={i} className="size-5 rounded-full border border-[#111827] flex items-center justify-center text-[7px] font-bold text-white" style={{ backgroundColor: `${c}30` }}>
                                {["S", "E", "V"][i]}
                            </div>
                        ))}
                    </div>
                    <span className="text-[9px] text-[#34d399] font-semibold">3 experts validated</span>
                </div>
            </div>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">How It Works</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                        From fragmented knowledge
                        <br />
                        <span className="text-gradient">to a living brain.</span>
                    </h2>
                </motion.div>

                {/* Flow visualization - desktop only */}
                <div className="hidden md:block mb-4">
                    <KnowledgeFlowSVG className="max-w-3xl mx-auto h-16" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="group relative rounded-2xl gradient-border p-8 card-hover"
                        >
                            <div className="absolute top-6 right-6 text-5xl font-black text-white/[0.03] tracking-tighter">{card.step}</div>

                            <div
                                className="size-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                style={{
                                    backgroundColor: `${card.color}15`,
                                    color: card.color,
                                }}
                            >
                                <card.icon size={26} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                            <p className="text-[#9ca3af] font-medium leading-relaxed text-[15px]">{card.desc}</p>

                            {/* Card-specific visual */}
                            {card.visual}

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-8 right-8 h-px opacity-20"
                                style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-14 text-center"
                >
                    <p className="text-lg md:text-xl text-[#9ca3af] font-medium">
                        Not another AI chatbot.{" "}
                        <span className="text-white font-bold">An enterprise intelligence layer.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
