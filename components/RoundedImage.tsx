import Image from 'next/image';

interface RoundedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt, width = 600, height = 600, caption }) => {
    return (
        <figure className="mb-4">
            <div className="overflow-hidden rounded-lg">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive"
                    className="object-cover"
                />
            </div>
            {caption && (
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default RoundedImage;
