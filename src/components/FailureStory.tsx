import { motion } from 'framer-motion';

const FailureStory = () => {
    return (
        <section id="failure-story" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-4xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[40px] p-12 md:p-16 border border-slate-200 shadow-xl text-center"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-slate-100">Risk & Resilience</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-[1.1] tracking-tight">
                        “The Knowledge Already Existed.”
                    </h2>

                    <div className="space-y-8 text-left text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        <p className="text-center font-semibold text-slate-400">In every major failure investigation, there is a sentence that appears again and again:</p>

                        <motion.div
                            whileInView={{ x: [0, 5, 0] }}
                            className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-8 my-10"
                        >
                            <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                                “The information was available — but not at the moment it was needed.”
                            </blockquote>
                        </motion.div>

                        <p>
                            The manuals were written. The procedures were approved. The experts knew what to do. And yet… the failure still happened.
                        </p>
                        <p>
                            Not because people were incompetent. Not because the knowledge was missing. But because under pressure, <span className="text-slate-900 font-bold decoration-primary/30 decoration-4 underline underline-offset-4">knowledge became unreachable.</span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Invisible Gap</h4>
                                <p className="text-base">Most disasters are caused by a gap between knowledge and execution. When documents are buried and experts are away, hesitation takes over.</p>
                            </div>
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Modern Reality</h4>
                                <p className="text-base">Equipment is more complex, teams are distributed. Relying on "hope" is not a system. Conqrai exists to make action inevitable.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FailureStory;
