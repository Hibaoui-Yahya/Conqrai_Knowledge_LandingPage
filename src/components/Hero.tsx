import { motion } from 'framer-motion';
import { Play, ShieldTick, Data } from 'iconsax-react';
import TerminalMockup from './TerminalMockup';

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Industrial Knowledge Platform
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
                            Stop searching manuals.<br />
                            <span className="text-gradient">Start executing procedures.</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10 font-medium">
                            Conqrai turns technical documentation and expert insights into validated, step-by-step answers for engineering and maintenance teams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/25 flex items-center justify-center gap-3 hover:bg-primary-dark hover:-translate-y-1 transition-all group">
                                Launch Live Demo
                                <Play variant="Bold" className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                            </button>
                            <button className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                                See How It Works
                            </button>
                        </div>

                        <div className="pt-8 border-t border-slate-200/60 flex gap-8 items-center">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                                <ShieldTick variant="Bold" size={20} className="text-primary" />
                                Verified Knowledge
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                                <Data variant="Bold" size={20} className="text-primary" />
                                No Hallucinations
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <TerminalMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
