import { motion } from 'framer-motion';
import { UserX, FileText, RefreshCcw, Unplug } from 'lucide-react';

const painPoints = [
    {
        icon: UserX,
        text: "Critical expertise leaves with people",
    },
    {
        icon: FileText,
        text: "PDFs, schemas, emails stay unused",
    },
    {
        icon: RefreshCcw,
        text: "Teams repeat the same errors",
    },
    {
        icon: Unplug,
        text: "AI tools lack context and trust",
    },
];

const ProblemStory = () => {
    return (
        <section className="relative py-28 bg-[#0e1117] overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-grid opacity-50" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-6">
                        Knowledge is everywhere.
                        <br />
                        <span className="text-[#38b6ff]">Intelligence is nowhere.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-[#111827]/60 border border-[#1f2937] hover:border-[#38b6ff]/20 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] flex-shrink-0">
                                <point.icon size={20} />
                            </div>
                            <p className="text-[17px] font-semibold text-[#9ca3af] leading-snug pt-1.5">
                                {point.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-14 text-center text-lg md:text-xl text-[#9ca3af] font-medium italic max-w-2xl mx-auto"
                >
                    Enterprises don't suffer from lack of data — they suffer from lack of memory.
                </motion.p>
            </div>
        </section>
    );
};

export default ProblemStory;
