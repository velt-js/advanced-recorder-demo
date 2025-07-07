import { VeltProvider } from "@veltdev/react";
import Recorder from "./Recorder";
import { VeltCollaboration } from "./velt/VeltCollaboration";

export default function Home() {
    return (
        <VeltProvider apiKey='krUVK3LgYeifgViaY3Oa' config={{
            develop: true,
            version: '4.5.0-beta.128'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any}>
            <div className="flex flex-col min-h-screen bg-white pt-16">
                <VeltCollaboration />
                <Recorder />
            </div>
        </VeltProvider>
    );
}
