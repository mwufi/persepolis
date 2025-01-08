import Title from "./Title";
import Subtitle from "./Subtitle";
import BlogPost from "./BlogPost";
import Image from "next/image";

const Panel = ({ children }: { children: React.ReactNode }) => {
    return <div className="relative z-10 max-w-4xl mx-auto py-20 px-8 backdrop-blur-md bg-black/15 rounded-xl max-h-[90vh] overflow-y-scroll scrollbar-hide">
        {children}
    </div>;
}

const Environment = ({ bgImage, children }: { bgImage: string, children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-fixed p-2 md:p-8 lg:p-16" style={{ backgroundImage: bgImage }}>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <Environment bgImage="url(/env-mountains.png)">
            <Panel>
                <Title text="Introducing... my new blog" />
                <Subtitle text="Enhancing user engagement" className="text-center" />
                <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
                    <Image
                        src="/sample-header.png"
                        alt="Blog header image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <BlogPost paragraphsCount={22} />
            </Panel>
        </Environment >
    );
}