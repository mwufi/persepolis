import { BlogDisplay } from "./BlogDisplay";
import { Panel } from "@/components/3d/Panel";
import Environment from "@/components/3d/Environment";

export default function Page() {
    return (
        <Environment bgImage="url(/2.png)">
            <Panel title="Introducing... my new blog" collapsed={true}>
                <BlogDisplay />
            </Panel>
        </Environment>
    );
}