import { motion } from 'framer-motion';
import { UserX, FileText, RefreshCcw, Unplug } from 'lucide-react';

const painPoints = [
    { icon: UserX, title: "Expertise Walks Out", text: "Critical knowledge leaves with retiring employees and departing experts." },
    { icon: FileText, title: "Data Sits Unused", text: "PDFs, schemas, and emails contain answers no one can find when needed." },
    { icon: RefreshCcw, title: "Mistakes Repeat", text: "Teams solve the same problems again because lessons aren't captured." },
    { icon: Unplug, title: "AI Lacks Context", text: "Generic AI tools feel disconnected from your real business operations." },
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
                    <div className="glass-card rounded-2xl p-8 text-center glow-border">
                        <p className="text-lg md:text-xl text-[#9ca3af] font-medium italic">
                            "Enterprises don't suffer from lack of data —
                            <span className="text-white font-semibold not-italic"> they suffer from lack of memory.</span>"
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStory;
