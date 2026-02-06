import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
    "AI-Powered Knowledge Graph",
    "Real-Time Expert Validation",
    "Source-Backed Answers",
    "Seamless Team Integration",
];

const stats = [
    { value: "2.8K+", label: "Documents Indexed" },
    { value: "50+", label: "Enterprise Teams" },
    { value: "160K+", label: "Queries Resolved" },
];

const ProductVision = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            <div className="absolute inset-0 bg-dots" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#38b6ff] rounded-full opacity-[0.04] blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <span className="section-badge">About Us</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                            AI that understands
                            <br />
                            <span className="text-gradient">your business</span> — not just your words.
                        </h2>
                        <p className="text-lg text-[#9ca3af] font-medium leading-relaxed mb-8">
                            Our platform doesn't replace experts. <span className="text-white font-semibold">It preserves them.</span> It connects human judgment with operational data and makes it accessible, explainable, and reusable across the organization.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="size-5 text-[#38b6ff] flex-shrink-0" />
                                    <span className="text-sm font-semibold text-[#e5e7eb]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-sm font-bold text-white hover:border-[#38b6ff]/30 transition-all group"
                        >
                            Request a demo
                            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right: Visual card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card-strong rounded-3xl p-8 glow-border">
                            {/* Mini dashboard */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-emerald-400" />
                                    <span className="text-xs font-semibold text-[#9ca3af]">Platform Status</span>
                                </div>
                                <span className="text-xs font-bold text-emerald-400">Live</span>
                            </div>

                            {/* Big stat */}
                            <div className="text-center py-6 mb-6 rounded-2xl bg-[#0b0f14]/60">
                                <div className="text-5xl font-black text-white mb-1 stat-glow">98.6%</div>
                                <div className="text-sm text-[#38b6ff] font-semibold">Response Accuracy</div>
                            </div>

                            {/* Trust bar */}
                            <div className="glass-card rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {["E", "S", "O"].map((letter, i) => (
                                            <div key={i} className="size-8 rounded-full bg-gradient-to-br from-[#38b6ff]/40 to-violet-500/40 border-2 border-[#111827] flex items-center justify-center text-[10px] font-bold text-white">
                                                {letter}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-white">Trusted by Enterprise Teams</div>
                                        <div className="text-[10px] text-[#9ca3af]">Expert-validated knowledge base</div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="text-center py-3 rounded-xl bg-[#0b0f14]/40">
                                        <div className="text-xl font-black text-white">{stat.value}</div>
                                        <div className="text-[10px] text-[#9ca3af] font-medium mt-0.5">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductVision;
