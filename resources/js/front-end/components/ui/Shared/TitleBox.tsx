import React from 'react';

interface TitleBoxProps {
    ClassName?: string;
    title:string;
}

function TitleBox({ ClassName, title }: TitleBoxProps) {
    return (
        <div className={`border-primary-600 mb-6 inline-flex items-center rounded-sm border-l-2 bg-neutral-800/90 px-4 py-2 text-white ${ClassName}`}>
            <span className="text-sm font-medium tracking-wider uppercase">{title}</span>
        </div>
    );
}
export default TitleBox;
