import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';

interface ContactItem {
    text: string;
    icon: LucideIcon;
    link?: string;
}

const contactItems: ContactItem[] = [
    { text: 'No 9, Ho Nai Industrial Zone  , Ho Nai 3 Hamlet, Trang Bom District, , Dong Nai Province, Viet Nam', icon: MapPin },
    { text: '+84 251 3981689 / 983354', icon: Phone, link: '+84 251 3981689' },
    { text: 'daisy@cqs-tech.com.tw', icon: Mail, link: 'mailto:daisy@cqs-tech.com.tw' },
];

const Information = () => {
    return (
        <div className="lg:col-span-3">
            <h4 className="border-primary-600 mb-6 border-l-2 pl-3 text-lg font-semibold tracking-wider text-white uppercase">Contact</h4>
            <ul className="space-y-4">
                {contactItems.map((item) => {
                    const IconComponent = item.icon;
                    const content = (
                        <div className="flex items-start">
                            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-neutral-700 bg-neutral-800">
                                <IconComponent className="text-primary-500" size={18} />
                            </div>
                            <span className="pt-2 text-gray-400">{item.text}</span>
                        </div>
                    );

                    return (
                        <li key={item.text}>
                            {item.link ? (
                                <a href={item.link} className="hover:text-primary-400 transition-colors">
                                    {content}
                                </a>
                            ) : (
                                content
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Information;
