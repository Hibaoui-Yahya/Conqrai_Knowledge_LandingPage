import { Layers, Brain, Search, Shield, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
    {
        icon: Layers, title: "Multimodal Knowledge Ingestion", desc: "Text, tables, schemas, images, diagrams, reports. All formats, one system.", color: "#38b6ff",
        visual: (
            <div className="mt-4 flex flex-wrap gap-1.5">
                {["PDF", "CSV", "IMG", "DOC", "JSON", "XLS"].map((type) => (
                    <span key={type} className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-[#38b6ff]/8 text-[#38b6ff]/60 border border-[#38b6ff]/10">{type}</span>
                ))}
            </div>
        ),
    },
    {
        icon: Brain, title: "Expert Insight Layer", desc: "Capture human warnings, context, and field-proven decisions alongside data.", color: "#a78bfa",
        visual: (
            <div className="mt-4 space-y-1.5">
                {["Warning: Check valve tolerance", "Best practice: Pre-heat phase"].map((note, i) => (
                    <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#a78bfa]/5 border border-[#a78bfa]/10">
                        <div className="size-1.5 rounded-full bg-[#a78bfa]/60" />
                        <span className="text-[9px] text-[#a78bfa]/70 font-medium truncate">{note}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Search, title: "Explainable AI Responses", desc: "Every answer comes with sources, reasoning chains, and full traceability.", color: "#34d399",
        visual: (
            <div className="mt-4 rounded-lg bg-[#0b0f14]/50 border border-[#1f2937]/30 p-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="size-3 rounded-full bg-[#34d399]/20 flex items-center justify-center">
                        <div className="size-1 rounded-full bg-[#34d399]" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#34d399]/80">Source Chain</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-[#6b7280]">
                    <span className="px-1.5 py-0.5 rounded bg-[#34d399]/8 text-[#34d399]/60">Doc A</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#34d399]/8 text-[#34d399]/60">Expert B</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#34d399]/8 text-[#34d399]/60 font-semibold">Answer</span>
                </div>
            </div>
        ),
    },
    {
        icon: Shield, title: "Enterprise Governance", desc: "Roles, permissions, validation workflows, and a complete audit trail.", color: "#f59e0b",
        visual: (
            <div className="mt-4 space-y-1.5">
                {[
                    { role: "Admin", level: "Full Access", w: "100%" },
                    { role: "Editor", level: "Read/Write", w: "70%" },
                    { role: "Viewer", level: "Read Only", w: "40%" },
                ].map((r) => (
                    <div key={r.role} className="flex items-center gap-2">
                        <span className="text-[9px] text-[#f59e0b]/60 font-medium w-12">{r.role}</span>
                        <div className="flex-1 h-1 rounded-full bg-[#1f2937]">
                            <div className="h-full rounded-full bg-[#f59e0b]/25" style={{ width: r.w }} />
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Globe, title: "Cross-Department Scaling", desc: "Deploy once, scale across teams, sites, and business units seamlessly.", color: "#ec4899",
        visual: (
            <div className="mt-4 flex items-center justify-center gap-3">
                {["HQ", "EU", "APAC"].map((site, i) => (
                    <div key={site} className="flex flex-col items-center gap-1">
                        <motion.div
                            className="size-8 rounded-lg border flex items-center justify-center text-[8px] font-bold"
                            style={{ borderColor: `${["#ec4899", "#38b6ff", "#34d399"][i]}30`, color: ["#ec4899", "#38b6ff", "#34d399"][i] }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                        >
                            {site}
                        </motion.div>
                        <div className="size-1 rounded-full bg-emerald-400/50" />
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Lock, title: "Secure Architecture", desc: "Private hosting, SSO integration, and data sovereignty by default.", color: "#6366f1",
        visual: (
            <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                    <div className="size-3 rounded-full bg-emerald-400/30 flex items-center justify-center">
                        <div className="size-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[9px] text-[#e5e7eb]/60 font-medium">Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                    <div className="size-3 rounded-full bg-emerald-400/30 flex items-center justify-center">
                        <div className="size-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[9px] text-[#e5e7eb]/60 font-medium">SOC 2</span>
                </div>
            </div>
        ),
    },
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
                            {cap.visual}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
