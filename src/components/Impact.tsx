import { motion } from 'framer-motion';
import { ShieldCheck, Users, ScanLine, Building } from 'lucide-react';

const signals = [
    { icon: ShieldCheck, title: "Regulated Environments", text: "Built for industries where compliance is not optional." },
    { icon: ScanLine, title: "Secure Architecture", text: "Private hosting, encryption, and data sovereignty by default." },
    { icon: Users, title: "Human-in-the-Loop", text: "Every AI output can be reviewed and validated by domain experts." },
    { icon: Building, title: "Enterprise Scale", text: "Deploy across departments, sites, and subsidiaries seamlessly." },
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
