import { motion } from 'framer-motion';
import { ShieldTick, People, Driver, Lock1, ClipboardTick, Data2, FingerScan, CloudCross } from 'iconsax-react';

const signals = [
    {
        icon: Driver, title: "On-Premise & Private Cloud", text: "Deploy entirely within your own infrastructure. Air-gapped, private cloud, or hybrid. Your data never touches external servers.",
        visual: (
            <div className="mt-4 space-y-2">
                <div className="rounded-lg bg-[#0b0f14]/50 border border-[#1f2937]/30 p-2.5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="size-3 rounded bg-emerald-400/20 flex items-center justify-center">
                            <div className="size-1.5 rounded-sm bg-emerald-400" />
                        </div>
                        <span className="text-[9px] font-semibold text-white/70">Deployment Options</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {["Your Servers", "Private Cloud", "Air-Gapped", "VPC"].map((opt) => (
                            <span key={opt} className="px-2 py-0.5 rounded text-[8px] font-bold bg-emerald-400/8 text-emerald-400/60 border border-emerald-400/10">{opt}</span>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        icon: CloudCross, title: "Zero Data Leakage", text: "No training on your data. No external API calls. No telemetry. Complete isolation ensures nothing leaves your environment.",
        visual: (
            <div className="mt-4 space-y-1.5">
                {[
                    { label: "External data transfer", status: "Blocked" },
                    { label: "Third-party model training", status: "Blocked" },
                    { label: "Telemetry & analytics", status: "Blocked" },
                ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#0b0f14]/50 border border-[#1f2937]/30">
                        <span className="text-[9px] text-[#9ca3af] font-medium">{item.label}</span>
                        <span className="text-[8px] font-bold text-red-400/70 flex items-center gap-1">
                            <div className="size-1.5 rounded-full bg-red-400/60" />
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: ShieldTick, title: "Regulatory Compliance", text: "Built for regulated industries. SOC 2 Type II, GDPR, HIPAA, ISO 27001 ready. Continuous compliance monitoring.",
        visual: (
            <div className="mt-4 flex flex-wrap gap-1.5">
                {["SOC 2 II", "GDPR", "HIPAA", "ISO 27001", "CCPA", "PIPEDA"].map((badge) => (
                    <span key={badge} className="px-2 py-1 rounded-md text-[8px] font-bold bg-emerald-400/8 text-emerald-400/70 border border-emerald-400/15">{badge}</span>
                ))}
            </div>
        ),
    },
    {
        icon: Lock1, title: "End-to-End Encryption", text: "AES-256 encryption at rest, TLS 1.3 in transit. Customer-managed keys (BYOK). Zero-knowledge architecture.",
        visual: (
            <div className="mt-4 rounded-lg bg-[#0b0f14]/50 border border-[#1f2937]/30 p-2.5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-semibold text-[#e5e7eb]/60">Encryption Score</span>
                    <span className="text-[9px] font-bold text-emerald-400">A+</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#1f2937] overflow-hidden">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-400/60"
                        initial={{ width: 0 }} whileInView={{ width: "98%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} />
                </div>
                <div className="flex items-center gap-3 mt-2">
                    {["AES-256", "TLS 1.3", "BYOK"].map((label) => (
                        <div key={label} className="flex items-center gap-1">
                            <div className="size-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[8px] text-emerald-400/60 font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        icon: People, title: "Human-in-the-Loop Validation", text: "Every AI output can be reviewed and validated by domain experts before it enters the knowledge base.",
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
        icon: FingerScan, title: "SSO & Identity Management", text: "SAML 2.0, OAuth, Active Directory, LDAP integration. Multi-factor authentication enforced organization-wide.",
        visual: (
            <div className="mt-4 flex flex-wrap gap-1.5">
                {["SAML 2.0", "OAuth", "LDAP", "AD", "MFA"].map((proto) => (
                    <span key={proto} className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-[#a78bfa]/8 text-[#a78bfa]/60 border border-[#a78bfa]/10">{proto}</span>
                ))}
            </div>
        ),
    },
    {
        icon: Data2, title: "Data Sovereignty", text: "Choose where your data lives. Regional deployment ensures compliance with local data residency laws.",
        visual: (
            <div className="mt-4 grid grid-cols-3 gap-1.5">
                {[
                    { region: "US", flag: "US-East" },
                    { region: "EU", flag: "EU-West" },
                    { region: "CA", flag: "CA-Central" },
                ].map((r) => (
                    <div key={r.region} className="text-center py-1.5 rounded-md bg-[#0b0f14]/50 border border-[#1f2937]/30">
                        <div className="text-[10px] font-bold text-white">{r.region}</div>
                        <div className="text-[7px] text-[#6b7280]">{r.flag}</div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: ClipboardTick, title: "Complete Audit Trail", text: "Every query, response, access, and modification logged with timestamps. Immutable audit logs for compliance auditors.",
        visual: (
            <div className="mt-4 space-y-1">
                {[
                    { time: "09:42", event: "Query: turbine specs", user: "S.Chen" },
                    { time: "09:42", event: "AI response generated", user: "System" },
                    { time: "09:43", event: "Expert validated", user: "M.Torres" },
                ].map((log, i) => (
                    <div key={i} className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#0b0f14]/50">
                        <span className="text-[7px] text-[#6b7280] font-mono w-8">{log.time}</span>
                        <span className="text-[8px] text-[#14b8a6]/60 font-medium flex-1 truncate">{log.event}</span>
                        <span className="text-[7px] text-[#6b7280] font-medium">{log.user}</span>
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
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#38b6ff] rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Trust & Security</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
                        Enterprise-grade security.
                        <br />
                        <span className="text-gradient">Zero compromise.</span>
                    </h2>
                    <p className="text-lg text-[#9ca3af] font-medium max-w-2xl mx-auto">
                        Your data is your most sensitive asset. We built every layer of Conqrai to ensure it stays within your control, always.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="group glass-card-strong rounded-2xl p-6 card-hover"
                        >
                            <div className="size-11 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] mb-4 group-hover:bg-[#38b6ff] group-hover:text-white transition-all duration-500">
                                <signal.icon size={20} variant="TwoTone" />
                            </div>
                            <h3 className="text-base font-bold text-white mb-2 tracking-tight">{signal.title}</h3>
                            <p className="text-[13px] text-[#9ca3af] font-medium leading-relaxed">{signal.text}</p>
                            {signal.visual}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
