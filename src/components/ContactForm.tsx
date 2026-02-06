import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AbstractBrain from '@/components/visuals/AbstractBrain';

const FinalCTA = () => {
    return (
        <section id="contact" className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            {/* Large glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#38b6ff] rounded-full opacity-[0.06] blur-[200px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card-strong rounded-3xl p-10 md:p-16 glow-border text-center relative overflow-hidden"
                >
                    {/* Inner glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#38b6ff] rounded-full opacity-[0.08] blur-[100px] pointer-events-none" />

                    {/* Abstract brain background */}
                    <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
                        <AbstractBrain className="w-full h-full" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                            The future of organizations is not
                            <br />
                            artificial intelligence.
                            <br />
                            <span className="text-gradient">It's augmented intelligence.</span>
                        </h2>

                        <p className="text-lg text-[#9ca3af] font-medium max-w-xl mx-auto mb-10">
                            See how your knowledge becomes a strategic asset. Talk to our team and discover how Conqrai transforms the way your organization thinks.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 rounded-xl px-10 text-base font-bold bg-[#38b6ff] hover:bg-[#2a9edf] text-white transition-all shadow-lg shadow-[#38b6ff]/25 hover:shadow-[#38b6ff]/40 hover:-translate-y-0.5"
                            >
                                <a href="mailto:hello@conqrai.com" className="flex items-center gap-2">
                                    Talk to an expert
                                    <ChevronRight className="size-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-14 rounded-xl px-10 text-base font-bold border-[#1f2937] text-[#9ca3af] hover:text-white hover:border-[#38b6ff]/30 bg-transparent transition-all hover:bg-[#111827]/50"
                            >
                                <a href="#how-it-works" className="flex items-center gap-2">
                                    Learn more
                                    <ArrowRight className="size-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
