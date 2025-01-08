interface SubtitleProps {
    text: string;
    className?: string;
}

export default function Subtitle({ text, className }: SubtitleProps) {
    return (
        <h2 className={`text-xl text-white mb-8 ${className}`}>
            {text}
        </h2>
    );
} 