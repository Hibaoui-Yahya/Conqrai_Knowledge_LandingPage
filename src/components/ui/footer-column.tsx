import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const data = {
    contact: {
        email: 'hello@conqrai.com',
        phone: '+1 866 316-8665',
        address: 'Montreal, Canada',
    },
    company: {
        name: 'Conqrai',
        description:
            'We transform documents, data, and human expertise into a single intelligent system, giving your teams clarity, continuity, and decision power.',
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
        compliance: [
            { text: 'Data Compliance', href: '#' },
            { text: 'Data Security', href: '#' },
            { text: 'Access Control', href: '#' },
        ],
        footer: [
            { text: 'Privacy Policy', href: '#' },
            { text: 'Terms of Use', href: '#' },
        ]
    }
};

const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/conqrai' },
];

export default function Footer4Col({ onOpenPage }: { onOpenPage?: (page: string) => void }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0b0f14] border-t border-[#1f2937]/60 w-full">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-xs">
                        <div className="flex items-center">
                            <img src="/dark_mode_logo-removebg-preview.png" alt="Conqrai Logo" className="h-9 w-auto" />
                        </div>

                        <p className="text-[#9ca3af] mt-6 leading-relaxed text-[14px] font-medium">
                            {data.company.description}
                        </p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <Mail className="size-4 text-[#38b6ff]" />
                                <a href={`mailto:${data.contact.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#38b6ff] transition-colors">{data.contact.email}</a>
                            </div>
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <Phone className="size-4 text-[#38b6ff]" />
                                <a href={`tel:${data.contact.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#38b6ff] transition-colors">{data.contact.phone}</a>
                            </div>
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <MapPin className="size-4 text-[#38b6ff]" />
                                <span>{data.contact.address}</span>
                            </div>
                        </div>

                        <ul className="mt-8 flex gap-3">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex size-10 items-center justify-center rounded-xl glass-card-strong text-[#9ca3af] hover:text-[#38b6ff] hover:border-[#38b6ff]/30 transition-all"
                                    >
                                        <span className="sr-only">{label}</span>
                                        <Icon className="size-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 flex-1 max-w-2xl">
                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Company</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.company.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Solutions</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.solutions.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Compliance</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.compliance.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-[#1f2937]/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2">
                        <p className="text-[13px] font-bold text-[#6b7280] tracking-tight uppercase">
                            &copy; {currentYear} {data.company.name}. All rights reserved.
                        </p>
                        {data.links.footer.map((link) => (
                            <button
                                key={link.text}
                                onClick={() => onOpenPage?.(link.text)}
                                className="text-[12px] font-bold text-[#6b7280] hover:text-[#38b6ff] transition-colors uppercase tracking-widest cursor-pointer"
                            >
                                {link.text}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#6b7280]">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
