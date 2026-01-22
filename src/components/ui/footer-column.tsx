import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

const data = {
    contact: {
        email: 'hello@conqrai.com',
        phone: '+1 866 316-8665',
        address: 'Montreal, Canada',
    },
    company: {
        name: 'Conqrai',
        description:
            'Need help turning your data and processes into concrete, measurable, and integrated AI solutions, unlocking your teams’ potential and strengthening your long‑term competitive advantage?',
    },
    links: {
        company: [
            { text: 'ConqrAI Pages', href: '#' },
        ],
        solutions: [
            { text: 'ConqrKnowledge', href: 'https://app.conqrknowledge.com' },
            { text: 'ConqrOCR', href: 'https://app.conqrocr.com/' },
            { text: 'ConqrTopTalent', href: '#' },
        ],
        industries: [
            { text: 'To be defined', href: '#' },
        ],
        services: [
            { text: 'To be defined', href: '#' },
        ],
        compliance: [
            { text: 'Data Compliance', href: '#' },
            { text: 'Data Security', href: '#' },
            { text: 'Access Control', href: '#' },
        ],
        footer: [
            { text: 'CONQrAI privacy policy', href: '#' },
            { text: 'CONQrAI terms of use', href: '#' },
        ]
    }
};

const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/conqrai' },
];

export default function Footer4Col() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 mt-24 w-full">
            <div className="mx-auto max-w-screen-xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-xs">
                        <div className="flex items-center">
                            <img src="/logo-light-removebg-preview.png" alt="Conqrai Logo" className="h-9 w-auto" />
                        </div>

                        <p className="text-slate-500 mt-6 leading-relaxed text-[14px] font-medium">
                            {data.company.description}
                        </p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <Mail className="size-4 text-primary" />
                                <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors">{data.contact.email}</a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <Phone className="size-4 text-primary" />
                                <a href={`tel:${data.contact.phone}`} className="hover:text-primary transition-colors">{data.contact.phone}</a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <MapPin className="size-4 text-primary" />
                                <span>{data.contact.address}</span>
                            </div>
                        </div>

                        <ul className="mt-8 flex gap-4">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex size-10 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-slate-400 hover:text-primary hover:border-primary/30 transition-all"
                                    >
                                        <span className="sr-only">{label}</span>
                                        <Icon className="size-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 flex-1 max-w-4xl">
                        <div>
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Company</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.company.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Solutions</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.solutions.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Industries</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.industries.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Services</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.services.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-8">Compliance</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.compliance.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-slate-500 hover:text-primary transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2">
                        <p className="text-[13px] font-bold text-slate-400 tracking-tight uppercase">
                            © {currentYear} {data.company.name} All rights reserved.
                        </p>
                        {data.links.footer.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                className="text-[12px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 group">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
