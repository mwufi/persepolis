import { cn } from "@/lib/utils";

const Environment = ({ bgImage, children, className }: { bgImage: string, children: React.ReactNode, className?: string }) => {
    return (
        <div
            className={cn(
                "relative h-screen bg-cover bg-center bg-fixed p-2 overflow-hidden",
                className
            )}
            style={{ backgroundImage: bgImage }}
        >
            {children}
        </div>
    );
}

export default Environment;