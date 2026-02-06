import { Layers, Brain, Search, Shield, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
    { icon: Layers, title: "Multimodal Knowledge Ingestion", desc: "Text, tables, schemas, images, diagrams, reports — all formats, one system.", color: "#38b6ff" },
    { icon: Brain, title: "Expert Insight Layer", desc: "Capture human warnings, context, and field-proven decisions alongside data.", color: "#a78bfa" },
    { icon: Search, title: "Explainable AI Responses", desc: "Every answer comes with sources, reasoning chains, and full traceability.", color: "#34d399" },
    { icon: Shield, title: "Enterprise Governance", desc: "Roles, permissions, validation workflows, and a complete audit trail.", color: "#f59e0b" },
    { icon: Globe, title: "Cross-Department Scaling", desc: "Deploy once, scale across teams, sites, and business units seamlessly.", color: "#ec4899" },
    { icon: Lock, title: "Secure Architecture", desc: "Private hosting, SSO integration, and data sovereignty by default.", color: "#6366f1" },
];

const CoreCapabilities = () => {
    return (
        <section id="capabilities" className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Features</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
                        Designed for
                        <br />
                        <span className="text-gradient">complex organizations</span>
                    </h2>
                    <p className="text-lg text-[#9ca3af] font-medium max-w-2xl mx-auto">
                        Manage your knowledge confidently every day with tools that simplify, track, and grow your institutional memory.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="group glass-card-strong rounded-2xl p-7 card-hover"
                        >
                            <div
                                className="size-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                                style={{ backgroundColor: `${cap.color}12`, color: cap.color }}
                            >
                                <cap.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{cap.title}</h3>
                            <p className="text-sm text-[#9ca3af] font-medium leading-relaxed">{cap.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
