"use client";

interface TitleProps {
    children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
    return (
        <h1 className="font-sail text-5xl md:text-7xl lg:text-8xl text-center">
            {children}
        </h1>
    );
}

export function Subtitle({ children }: TitleProps) {
    return (
        <h2 className="font-sail text-2xl md:text-4xl lg:text-5xl text-center">
            {children}
        </h2>
    );
}
