import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
    return (
        <section id="contact" className="relative py-32 bg-[#0b0f14] overflow-hidden">
            {/* Soft blue gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#38b6ff] rounded-full opacity-[0.06] blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#e5e7eb] tracking-tighter leading-[1.1] mb-8">
                        The future of organizations is not artificial intelligence.
                        <br />
                        <span className="text-[#38b6ff]">It's augmented intelligence.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-[#9ca3af] font-medium max-w-2xl mx-auto mb-12">
                        See how your knowledge becomes a strategic asset.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 rounded-xl px-10 text-base font-bold bg-[#38b6ff] hover:bg-[#2a9edf] text-white transition-all shadow-lg shadow-[#38b6ff]/20"
                        >
                            <a href="mailto:hello@conqrai.com">
                                Talk to an expert
                                <ArrowRight className="ml-2 size-4" />
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
