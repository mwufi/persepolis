import React from 'react';

export default function NewsfeedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="items-stretch min-h-0 min-w-0 flex flex-col container max-w-screen-xl sm:w-[580px] lg:w-[1008px] xl:w-[1280px] mx-auto !flex-row grow">
                {children}
            </div>
        </div>
    );
}
