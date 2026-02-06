import { motion } from 'framer-motion';
import { ShieldCheck, Users, ScanLine, Building } from 'lucide-react';

const signals = [
    {
        icon: ShieldCheck, title: "Regulated Environments", text: "Built for industries where compliance is not optional.",
        visual: (
            <div className="mt-4 flex items-center gap-2">
                {["HIPAA", "SOC 2", "GDPR"].map((badge) => (
                    <span key={badge} className="px-2 py-1 rounded-md text-[8px] font-bold bg-emerald-400/8 text-emerald-400/70 border border-emerald-400/15">{badge}</span>
                ))}
            </div>
        ),
    },
    {
        icon: ScanLine, title: "Secure Architecture", text: "Private hosting, encryption, and data sovereignty by default.",
        visual: (
            <div className="mt-4 rounded-lg bg-[#0b0f14]/50 border border-[#1f2937]/30 p-2.5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-semibold text-[#e5e7eb]/60">Security Score</span>
                    <span className="text-[9px] font-bold text-emerald-400">A+</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#1f2937] overflow-hidden">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-400/60"
                        initial={{ width: 0 }} whileInView={{ width: "96%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} />
                </div>
            </div>
        ),
    },
    {
        icon: Users, title: "Human-in-the-Loop", text: "Every AI output can be reviewed and validated by domain experts.",
        visual: (
            <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                    {["#38b6ff", "#a78bfa", "#34d399", "#f59e0b"].map((c, i) => (
                        <motion.div key={i} className="size-7 rounded-full border-2 border-[#111827] flex items-center justify-center text-[8px] font-bold text-white"
                            style={{ backgroundColor: `${c}30` }}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                        >
                            {["E", "S", "V", "A"][i]}
                        </motion.div>
                    ))}
                </div>
                <div>
                    <div className="text-[10px] font-semibold text-white/80">4 reviewers active</div>
                    <div className="text-[8px] text-[#6b7280]">Real-time validation</div>
                </div>
            </div>
        ),
    },
    {
        icon: Building, title: "Enterprise Scale", text: "Deploy across departments, sites, and subsidiaries seamlessly.",
        visual: (
            <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                    { label: "Depts", value: "12" },
                    { label: "Sites", value: "8" },
                    { label: "Users", value: "500+" },
                ].map((s) => (
                    <div key={s.label} className="text-center py-2 rounded-lg bg-[#0b0f14]/40 border border-[#1f2937]/30">
                        <div className="text-sm font-black text-white">{s.value}</div>
                        <div className="text-[8px] text-[#6b7280]">{s.label}</div>
                    </div>
                ))}
            </div>
        ),
    },
];

const TrustSignals = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-dots" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#38b6ff] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Trust & Security</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05]">
                        Enterprise-ready
                        <br />
                        <span className="text-gradient">from day one.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group glass-card-strong rounded-2xl p-7 card-hover"
                        >
                            <div className="size-12 rounded-2xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] mb-5 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                <signal.icon size={22} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{signal.title}</h3>
                            <p className="text-sm text-[#9ca3af] font-medium leading-relaxed">{signal.text}</p>
                            {signal.visual}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
