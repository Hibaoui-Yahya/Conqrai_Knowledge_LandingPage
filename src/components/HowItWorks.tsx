import { motion } from 'framer-motion';
import { Download, GitMerge, Zap } from 'lucide-react';

const cards = [
    {
        icon: Download,
        step: "01",
        title: "Capture",
        desc: "Documents, diagrams, tables, expert insights — ingested into one unified knowledge base.",
        color: "#38b6ff",
    },
    {
        icon: GitMerge,
        step: "02",
        title: "Connect",
        desc: "Context, history, decisions, reasoning — linked together into an intelligent graph.",
        color: "#a78bfa",
    },
    {
        icon: Zap,
        step: "03",
        title: "Act",
        desc: "AI-assisted answers, recommendations, traceability — delivered at the moment of need.",
        color: "#34d399",
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
