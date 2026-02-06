import { motion } from 'framer-motion';
import { ShieldCheck, Users, ScanLine, Building } from 'lucide-react';

const signals = [
    {
        icon: ShieldCheck,
        text: "Designed for regulated environments",
    },
    {
        icon: ScanLine,
        text: "Secure architecture",
    },
    {
        icon: Users,
        text: "Human-in-the-loop by default",
    },
    {
        icon: Building,
        text: "Scales across departments and companies",
    },
];

const TrustSignals = () => {
    return (
        <section className="relative py-28 bg-[#0e1117] overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1]">
                        Enterprise-ready <span className="text-[#38b6ff]">from day one.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-[#111827]/60 border border-[#1f2937] hover:border-[#38b6ff]/20 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff] flex-shrink-0">
                                <signal.icon size={20} />
                            </div>
                            <p className="text-[16px] font-semibold text-[#e5e7eb]">{signal.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
