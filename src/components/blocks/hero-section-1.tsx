import React from 'react'
import { ArrowRight, Menu, X, Users, BarChart3, Shield, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const stats = [
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: BarChart3, value: "4x", label: "Faster Decisions" },
    { icon: Shield, value: "100%", label: "Traceable Answers" },
]

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <section className="relative min-h-screen overflow-hidden bg-[#0b0f14]">
                {/* Background layers */}
                <div className="absolute inset-0 bg-grid" />
                <div className="absolute inset-0 bg-radial-glow" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#38b6ff] rounded-full opacity-[0.05] blur-[200px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#38b6ff] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
                    {/* Hero content */}
                    <div className="text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="section-badge">
                                <span className="size-1.5 rounded-full bg-[#38b6ff] animate-pulse" />
                                Enterprise AI Platform
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05]"
                        >
                            Your organization already
                            <br />
                            has the <span className="text-gradient">answers</span>.
                            <br />
                            <span className="text-[#9ca3af]">They're just scattered.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-[#9ca3af] font-medium leading-relaxed"
                        >
                            We transform documents, data, and human expertise into a single intelligent system that helps your teams decide faster and smarter.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="h-13 rounded-xl px-8 text-base font-bold bg-[#38b6ff] hover:bg-[#2a9edf] text-white transition-all shadow-lg shadow-[#38b6ff]/25 hover:shadow-[#38b6ff]/40 hover:-translate-y-0.5"
                            >
                                <a href="#contact" className="flex items-center gap-2">
                                    Request a demo
                                    <ChevronRight className="size-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-13 rounded-xl px-8 text-base font-bold border-[#1f2937] text-[#9ca3af] hover:text-white hover:border-[#38b6ff]/30 bg-transparent transition-all hover:bg-[#111827]/50"
                            >
                                <a href="#how-it-works" className="flex items-center gap-2">
                                    See how it works
                                    <ArrowRight className="size-4" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-20 max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-[#1f2937]">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-8 py-3">
                                    <div className="size-10 rounded-xl bg-[#38b6ff]/10 flex items-center justify-center text-[#38b6ff]">
                                        <stat.icon size={18} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white tracking-tight stat-glow">{stat.value}</div>
                                        <div className="text-xs font-medium text-[#9ca3af]">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Decorative dashboard mockup cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-16 relative max-w-5xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Card 1 */}
                            <div className="glass-card-strong rounded-2xl p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-8 rounded-lg bg-[#38b6ff]/15 flex items-center justify-center">
                                        <div className="size-3 rounded-full bg-[#38b6ff]" />
                                    </div>
                                    <span className="text-sm font-semibold text-white">Knowledge Capture</span>
                                </div>
                                <div className="space-y-2.5">
                                    <div className="h-2 rounded-full bg-[#1f2937] overflow-hidden">
                                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#38b6ff] to-[#38b6ff]/60" />
                                    </div>
                                    <div className="h-2 rounded-full bg-[#1f2937] overflow-hidden">
                                        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#38b6ff]/80 to-[#38b6ff]/40" />
                                    </div>
                                    <div className="h-2 rounded-full bg-[#1f2937] overflow-hidden">
                                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#38b6ff] to-[#38b6ff]/60" />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between text-xs text-[#9ca3af]">
                                    <span>2,847 documents</span>
                                    <span className="text-[#38b6ff] font-semibold">Active</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="glass-card-strong rounded-2xl p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                                        <div className="size-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <span className="text-sm font-semibold text-white">AI Responses</span>
                                </div>
                                <div className="text-center py-3">
                                    <div className="text-4xl font-black text-white mb-1">98.6%</div>
                                    <div className="text-xs text-emerald-400 font-semibold">Accuracy Rate</div>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-[#1f2937]">
                                    <span className="text-xs text-[#9ca3af]">Last 30 days</span>
                                    <span className="text-xs text-emerald-400 font-medium">+2.3%</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="glass-card-strong rounded-2xl p-6 card-hover">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-8 rounded-lg bg-violet-500/15 flex items-center justify-center">
                                        <div className="size-3 rounded-full bg-violet-400" />
                                    </div>
                                    <span className="text-sm font-semibold text-white">Expert Validations</span>
                                </div>
                                <div className="space-y-3">
                                    {["Engineering Lead", "Safety Officer", "Operations Mgr"].map((name, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="size-7 rounded-full bg-gradient-to-br from-[#38b6ff]/30 to-violet-500/30 flex items-center justify-center text-[10px] font-bold text-white">
                                                {name.charAt(0)}
                                            </div>
                                            <span className="text-xs text-[#9ca3af] flex-1">{name}</span>
                                            <div className="size-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                <div className="size-1.5 rounded-full bg-emerald-400" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Gradient fade at bottom */}
                        <div className="absolute -bottom-8 inset-x-0 h-16 bg-gradient-to-t from-[#0b0f14] to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

const menuItems = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group">
                <div className={cn(
                    'mx-auto mt-4 max-w-6xl px-6 transition-all duration-300 lg:px-12 rounded-2xl border border-transparent',
                    isScrolled && 'glass-card-strong max-w-5xl lg:px-8 shadow-2xl shadow-black/30'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center">
                                <img
                                    src="/logo-light-removebg-preview.png"
                                    alt="Conqrai Logo"
                                    className={cn("h-8 w-auto transition-all duration-300", isScrolled && "h-6")}
                                />
                            </a>
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 text-[#e5e7eb] duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 text-[#e5e7eb] -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#9ca3af] hover:text-[#38b6ff] transition-colors">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#111827] group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-[#1f2937] p-6 shadow-2xl shadow-black/30 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="text-[#9ca3af] hover:text-[#38b6ff] block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="https://app.conqrknowledge.com" className="text-[#9ca3af] hover:text-[#38b6ff] block duration-150">
                                            <span>Login</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit ml-4">
                                <Button asChild variant="ghost" size="sm" className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#9ca3af] hover:text-[#38b6ff] transition-colors">
                                    <a href="https://app.conqrknowledge.com"><span>Login</span></a>
                                </Button>
                                <Button asChild size="sm" className="bg-[#38b6ff] hover:bg-[#2a9edf] text-white font-bold rounded-xl px-6 h-9 shadow-lg shadow-[#38b6ff]/20">
                                    <a href="#contact"><span>Request a demo</span></a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
