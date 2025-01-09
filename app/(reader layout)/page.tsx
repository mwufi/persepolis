import Environment from "@/components/3d/Environment";
import { Panel } from "@/components/3d/Panel";
import { getMdxContent } from "@/lib/mdx";
import { PostMeta } from "./[...slug]/PostMeta";

export default async function Page() {
    const [mdxData, { default: Post }] = await Promise.all([
        getMdxContent(['homepage']),
        import(`@/markdown/homepage.mdx`)
    ])
    if (!mdxData) return <div>You do need something in homepage.mdx</div>
    return (
        <Environment bgImage='url(/env-mountains.png)'>
            <div className="grid h-full">
                <Panel title="Zentomorrow.com" className="my-auto">
                    {mdxData.frontMatter && <PostMeta frontMatter={mdxData.frontMatter} />}
                    <div className="max-w-[600px] mx-auto w-full main-article">
                        <Post />
                    </div>
                </Panel>
            </div>
        </Environment >
    )
}