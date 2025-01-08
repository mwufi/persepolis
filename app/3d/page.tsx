import { BlogDisplay } from "./BlogDisplay";
import { Panel } from "./Panel";

const Environment = ({ bgImage, children, className }: { bgImage: string, children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative h-screen bg-cover bg-center bg-fixed p-2 md:p-8 lg:p-16 ${className}`} style={{ backgroundImage: bgImage }}>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <Environment bgImage="url(/2.png)">
            <Panel title="Introducing... my new blog">
                <BlogDisplay />
            </Panel>
        </Environment >
    );
}