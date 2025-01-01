import Sidebar from '@/components/Sidebar';
import ImageGrid from '@/components/ImageGrid';

const sampleImages = [
    {
        src: '/stable.png',
        alt: 'Sample Image 1',
        href: '/instagram/post/1',
    },
    {
        src: '/sundial.png',
        alt: 'Sample Image 2',
        href: '/instagram/post/2',
    },
    // Add more sample images as needed
];

export default function InstagramPage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar position="left" />
            <main className="flex-1 ml-16 p-8">
                <ImageGrid images={sampleImages} />
            </main>
        </div>
    );
}