import { motion } from 'framer-motion';
import { Download, GitMerge, Zap } from 'lucide-react';

const cards = [
    {
        icon: Download,
        title: "Capture",
        desc: "Documents, diagrams, tables, expert insights",
    },
    {
        icon: GitMerge,
        title: "Connect",
        desc: "Context, history, decisions, reasoning",
    },
    {
        icon: Zap,
        title: "Act",
        desc: "AI-assisted answers, recommendations, traceability",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="relative py-28 bg-[#0b0f14] overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38b6ff] rounded-full opacity-[0.04] blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-6">
                        From fragmented knowledge
                        <br />
                        <span className="text-[#38b6ff]">to a living brain.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="group relative p-8 rounded-2xl glass-card glow-border hover:border-[#38b6ff]/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] mb-6 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                <card.icon size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#e5e7eb] mb-3 tracking-tight">{card.title}</h3>
                            <p className="text-[#9ca3af] font-medium leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-14 text-center text-lg md:text-xl text-[#9ca3af] font-medium max-w-2xl mx-auto"
                >
                    Not another AI chatbot.
                    <br />
                    <span className="text-[#e5e7eb] font-bold">An enterprise intelligence layer.</span>
                </motion.p>
            </div>
        </section>
    );
};

export default HowItWorks;
