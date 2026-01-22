import { motion } from 'framer-motion';
import { Database, CheckSquare, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            tag: "PHASE 01",
            icon: Database,
            title: "Knowledge Consolidation",
            desc: "We ingest PDF manuals, technical notes, and historical SOPs into a unified, secure knowledge architecture."
        },
        {
            tag: "PHASE 02",
            icon: CheckSquare,
            title: "Expert Validation",
            desc: "Senior engineering leads review and augment instructions with field-proven 'tribal knowledge'."
        },
        {
            tag: "PHASE 03",
            icon: MessageCircle,
            title: "Operational Intelligence",
            desc: "Technicians query via natural language to receive precise, source-backed directions for immediate execution."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-20 leading-tight tracking-tight">
                    From unorganized data to <br />
                    <span className="text-primary">high-confidence execution.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="text-[10px] font-bold text-primary tracking-[0.2em] mb-6 uppercase">{step.tag}</div>
                            <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm text-primary rounded-xl flex items-center justify-center mb-8 group-hover:border-primary/50 transition-all duration-300">
                                <step.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed text-[16px]">{step.desc}</p>

                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-32 -right-6 w-12 h-0.5 bg-slate-100" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
