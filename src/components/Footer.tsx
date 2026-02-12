import { Flash } from 'iconsax-react';
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from 'lucide-react';

interface FooterLink {
    name: string;
    href: string;
    isExternal?: boolean;
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks: Record<string, FooterLink[]> = {
        Product: [
            { name: 'How it Works', href: '#how-it-works' },
            { name: 'Resilience', href: '#failure-story' },
            { name: 'Impact', href: '#impact' },
            { name: 'Request Demo', href: '#contact' },
        ],
        Company: [
            { name: 'About Us', href: '#' },
            { name: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
            { name: 'Contact', href: 'mailto:contact@conqrai.com' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Security', href: '#' },
        ]
    };

    return (
        <footer className="bg-white text-slate-500 py-12 md:py-24 pb-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr] gap-8 lg:gap-16 mb-12 lg:mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 text-2xl font-bold text-slate-900 tracking-tight">
                            <Flash variant="Bold" className="text-primary w-8 h-8" />
                            <span>Conqrai</span>
                        </div>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-xs font-medium">
                            Engineering excellence through validated knowledge and expert-driven insights.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Linkedin, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Github, href: '#' },
                                { Icon: Mail, href: 'mailto:contact@conqrai.com' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    <social.Icon size={18} strokeWidth={2} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-6">
                            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em]">{title}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-1.5 hover:text-primary transition-colors duration-300 font-medium text-[15px]"
                                        >
                                            {link.name}
                                            {link.isExternal && <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[12px] font-bold tracking-widest uppercase text-slate-400">
                        © {currentYear} Conqrai Knowledge Systems.
                    </div>
                    <div className="flex items-center gap-6 text-[12px] font-bold text-slate-400">
                        <span>Designed for Industrial Excellence</span>
                        <div className="flex items-center gap-1.5 text-slate-900">
                            <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Systems Operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
