import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, Users, Zap } from 'lucide-react';

const Impact = () => {
    const stats = [
        {
            icon: TrendingDown,
            label: "Search & Retrieval",
            value: "30%",
            trend: "Reduction",
            desc: "In time spent hunting for manuals and tribal knowledge."
        },
        {
            icon: ShieldCheck,
            label: "Operational Safety",
            value: "100%",
            trend: "Validated",
            desc: "All procedures are verified by expert field-notes before execution."
        },
        {
            icon: Users,
            label: "Knowledge Transfer",
            value: "4x",
            trend: "Faster",
            desc: "Speed of onboarding new engineers into complex operational workflows."
        },
        {
            icon: Zap,
            label: "Rework & Errors",
            value: "25%",
            trend: "Decrease",
            desc: "Reduction in maintenance rework caused by procedural ambiguity."
        }
    ];

    return (
        <section id="impact" className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-20">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-slate-100">Direct Outcomes</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Measured impact for <br />
                        <span className="text-primary">industrial operations.</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
                        We don't just store documents. We optimize the interval between knowledge and action.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 md:p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6 border border-slate-100">
                                <stat.icon size={20} />
                            </div>
                            <div className="space-y-1 mb-4">
                                <div className="text-4xl font-black text-slate-900 tracking-tighter">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                    {stat.trend}
                                </div>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900 mb-2">{stat.label}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 md:mt-20 p-6 md:p-12 rounded-2xl md:rounded-[32px] bg-slate-900 overflow-hidden relative group">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                Ready to validate your <br />operational knowledge?
                            </h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed">
                                Join the leading engineering teams moving from static search to high-confidence execution.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 text-center shadow-lg shadow-primary/20"
                            >
                                Request Case Study
                            </a>
                            <a
                                href="#how-it-works"
                                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 text-center border border-slate-700"
                            >
                                View Benchmarks
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
