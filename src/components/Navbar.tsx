import { useState, useEffect } from 'react';
import { Flash } from 'iconsax-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight">
                    <Flash variant="Bold" className="text-primary w-6 h-6" />
                    <span>Conqrai</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">How it Works</a>
                    <a href="#failure-story" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Resilience</a>
                    <a href="#impact" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Impact</a>
                    <a href="#contact" className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
