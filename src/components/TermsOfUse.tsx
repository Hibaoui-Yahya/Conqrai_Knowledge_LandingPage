import { X } from 'lucide-react';

const TermsOfUse = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-[#0b0f14] overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Terms of Use</h1>
                    <button
                        onClick={onClose}
                        className="size-10 rounded-xl glass-card-strong flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#38b6ff]/30 transition-all cursor-pointer"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <p className="text-[#9ca3af] leading-relaxed font-medium">
                        Welcome to www.conqrai.com (hereinafter "the Site"). By accessing or using our Site, you agree to comply with these Terms of Use. If you do not accept these terms, please do not use our Site.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            By using this Site, you confirm that you have read, understood, and accepted these Terms of Use. These terms may be modified at any time, and it is your responsibility to review them regularly.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Access to the Site</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We reserve the right to suspend or withdraw access to our Site, without notice, for technical or other reasons. We will not be liable if, for any reason, our Site is unavailable at any time.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Acceptable Use</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            You agree to use our Site only for lawful purposes and in accordance with applicable laws. You must not:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 text-[#9ca3af] font-medium">
                            <li>Use the Site in any way that violates any applicable law or regulation.</li>
                            <li>Transmit any unlawful, harmful, abusive, or offensive content.</li>
                            <li>Attempt to gain unauthorized access to our computer system or any network connected to the Site.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of CONQrAI Inc., its subsidiaries, or its licensors (hereinafter "CONQrAI") and is protected by intellectual property laws. You may not reproduce, distribute, or modify this content without our prior written authorization.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Links to Third-Party Sites</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            Our Site may contain links to other websites that are not under our control. We have no responsibility for the content of these third-party sites and do not endorse their content. Use of these sites is at your own risk.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            To the fullest extent permitted by applicable law, CONQrAI shall not be liable for any direct, indirect, special, or consequential damages resulting from the use or inability to use the Site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">7. Indemnification</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            You agree to indemnify and hold harmless CONQrAI, its officers, employees, and agents against any claim, loss, damage, or expense (including legal fees) resulting from your use of the Site or your violation of these Terms of Use.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">8. Modifications to Terms</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We reserve the right to modify these Terms of Use at any time. Modifications will be effective immediately upon posting on the Site. Your continued use of the Site after the posting of modifications constitutes your acceptance of the new terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">9. Governing Law</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            These Terms of Use are governed by the laws in force in Canada. Any dispute arising from these terms will be submitted to the competent courts of Montreal, Quebec, Canada.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">10. Changes to these Terms of Use</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We reserve the right to modify these Terms of Use. Any changes will be posted on our website with an updated effective date.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">11. Contact</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            For any questions regarding these Terms of Use, please contact us:
                        </p>
                        <div className="glass-card rounded-xl p-6 space-y-2">
                            <p className="text-[#9ca3af] font-medium">info@conqrai.com</p>
                            <p className="text-[#9ca3af] font-medium">1-877-316-7786</p>
                            <p className="text-[#9ca3af] font-medium">102-2727 Saint-Patrick, Montreal, Quebec, Canada, H3K 0A8</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
