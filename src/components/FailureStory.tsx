import { motion } from 'framer-motion';

const ProductVision = () => {
    return (
        <section className="relative py-28 bg-[#0e1117] overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-10">
                        AI that understands your business —
                        <br />
                        <span className="text-[#38b6ff]">not just your words.</span>
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-[#9ca3af] font-medium leading-relaxed">
                        <p>
                            Our platform doesn't replace experts.
                            <br />
                            <span className="text-[#e5e7eb] font-semibold">It preserves them.</span>
                        </p>
                        <p>
                            It connects human judgment with operational data and makes it accessible, explainable, and reusable across the organization.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-12 inline-block px-8 py-4 rounded-2xl bg-[#38b6ff]/10 border border-[#38b6ff]/20"
                    >
                        <p className="text-lg md:text-xl font-bold text-[#38b6ff]">
                            Human-centered AI. Enterprise-grade by design.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductVision;
