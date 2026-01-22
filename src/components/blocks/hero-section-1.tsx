import React from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { type Variants, motion } from 'framer-motion'
import TerminalMockup from '../TerminalMockup'
import { Typewriter } from '@/components/ui/typewriter'


export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            } as const satisfies { container: Variants; item: Variants }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center pt-8 md:pt-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex justify-center"
                                >
                                    <a
                                        href="#how-it-works"
                                        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 transition-colors hover:border-primary/50 hover:bg-slate-50">
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors">Industrial AI Platform</span>
                                        <ArrowRight className="size-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1] lg:leading-[1.1]">
                                    Unify Your Industrial Knowledge. <br />
                                    <span className="text-slate-500">And turn it into </span>
                                    <Typewriter
                                        text={[
                                            "Precise Actions.",
                                            "Validated SOPs.",
                                            "Expert Guidance.",
                                            "Clear Results.",
                                            "Your Advantage.",
                                        ]}
                                        speed={70}
                                        className="text-primary italic"
                                        waitTime={2000}
                                        deleteSpeed={40}
                                        cursorChar={"_"}
                                    />
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mx-auto mt-6 max-w-xl text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                                    Conqrai turns technical documentation into validated, step-by-step answers for mission-critical industrial teams.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-14 rounded-xl px-10 text-lg font-bold bg-slate-900 hover:bg-primary transition-all shadow-xl shadow-slate-900/10">
                                        <a href="#demo">
                                            <span>Request Access</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-14 rounded-xl px-10 text-lg font-bold border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                                        <a href="#how-it-works">
                                            <span>View Use Cases</span>
                                        </a>
                                    </Button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="relative mt-20 px-2 pb-24"
                                >
                                    <div className="relative mx-auto max-w-2xl">
                                        <TerminalMockup />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Resilience', href: '#failure-story' },
    { name: 'Impact', href: '#impact' },
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
                <div className={cn('mx-auto mt-4 max-w-6xl px-6 transition-all duration-300 lg:px-12 rounded-2xl border border-transparent', isScrolled && 'bg-white/80 max-w-5xl backdrop-blur-lg lg:px-8 border-slate-200 shadow-sm')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center">
                                <img
                                    src="/logo-light-removebg-preview.png"
                                    alt="Conqrai Logo"
                                    className={cn("h-8 w-auto transition-all duration-300", isScrolled && "h-6")}
                                />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500 hover:text-primary transition-colors">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-slate-600 hover:text-primary block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a
                                            href="https://app.conqrknowledge.com"
                                            className="text-slate-600 hover:text-primary block duration-150">
                                            <span>Login</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit ml-4">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500 hover:text-primary transition-colors">
                                    <a href="https://app.conqrknowledge.com">
                                        <span>Login</span>
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn("bg-slate-900 hover:bg-primary text-white font-bold rounded-lg px-6 h-9")}>
                                    <a href="#contact">
                                        <span>Get Started</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}


