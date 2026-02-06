import { Layers, Brain, Search, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
    {
        icon: Layers,
        title: "Multimodal knowledge ingestion",
        desc: "Text, tables, schemas, images, diagrams, reports",
    },
    {
        icon: Brain,
        title: "Expert insight layer",
        desc: "Capture human warnings, context, and decisions",
    },
    {
        icon: Search,
        title: "Explainable AI responses",
        desc: "Sources, reasoning, traceability",
    },
    {
        icon: Shield,
        title: "Enterprise governance",
        desc: "Roles, permissions, validation, audit trail",
    },
];

const CoreCapabilities = () => {
    return (
        <section id="capabilities" className="relative py-28 bg-[#0b0f14] overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#38b6ff] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1]">
                        Designed for <span className="text-[#38b6ff]">complex organizations</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-2xl bg-[#111827]/60 border border-[#1f2937] hover:border-[#38b6ff]/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] flex-shrink-0 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                    <cap.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#e5e7eb] mb-2 tracking-tight">{cap.title}</h3>
                                    <p className="text-[#9ca3af] font-medium leading-relaxed">{cap.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
