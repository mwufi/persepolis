interface TitleProps {
    text: string;
}

export default function Title({ text }: TitleProps) {
    return (
        <h1 className="font-sail text-7xl font-bold mb-8 text-center text-white">
            {text}
        </h1>
    );
}
