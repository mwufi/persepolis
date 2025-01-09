"use client";

interface TitleProps {
    children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
    return (
        <h1 className="font-sail text-5xl md:text-7xl lg:text-8xl text-center my-4">
            {children}
        </h1>
    );
}

export function Subtitle({ children }: TitleProps) {
    return (
        <h2 className="text-2xl text-center mb-12">
            {children}
        </h2>
    );
}
