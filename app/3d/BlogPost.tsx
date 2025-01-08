export default function BlogPost({ paragraphsCount = 3 }) {
    const paragraphs = Array.from({ length: paragraphsCount }, (_, index) => (
        <p key={index} className="mb-4 text-white text-lg font-afacad">
            {`Paragraph ${index + 1} content... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        </p>
    ));

    return (
        <article className="prose prose-lg prose-invert font-afacad">
            {paragraphs}
        </article>
    );
} 