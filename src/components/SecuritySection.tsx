import { ShieldCheck, Lock, Cloud, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SecuritySection = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: "Private Knowledge Hosting",
            desc: "Your proprietary manuals and expert field notes never leave your secure environment. Zero public data exposure."
        },
        {
            icon: Lock,
            title: "SSO & IAM Integration",
            desc: "Full support for Okta, Azure AD, and enterprise identity providers. Role-based access for every procedure."
        },
        {
            icon: Cloud,
            title: "Hybrid Deployment",
            desc: "Available as a secure SaaS, private VPC, or on-premise installation for high-security facilities."
        },
        {
            icon: FileCheck,
            title: "Audit-Ready Logs",
            desc: "Every answer, validation, and feedback loop is logged for compliance audits and safety investigations."
        }
    ];

    return (
        <section className="py-12 md:py-24 bg-slate-900 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(58,182,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-10 lg:gap-20 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-primary/20">
                            Enterprise Security
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
                            Your IP is our <br />
                            <span className="text-primary italic">Highest Priority.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                            Conqrai is built for industries where security isn't a feature—it's a requirement. We wrap your technical knowledge in multiple layers of defense.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
                            >
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <f.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {f.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
