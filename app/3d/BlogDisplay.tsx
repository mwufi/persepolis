import Title from './Title';
import Subtitle from "./Subtitle";
import BlogPost from "./BlogPost";
import Image from "next/image";

export const BlogDisplay = () => {
    return (
        <>
            <Title text="Introducing... my new blog" />
            <Subtitle text="Enhancing user engagement" className="text-center" />
            <div className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden">
                <Image
                    src="/sample-header.png"
                    alt="Blog header image"
                    fill
                    className="object-cover opacity-85"
                    priority
                />
            </div>
            <BlogPost paragraphsCount={22} />
        </>
    );
} 