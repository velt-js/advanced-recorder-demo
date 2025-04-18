import { VeltProvider } from "@veltdev/react";
import Initialise from "./Initialise";
import Recorder from "./Recorder";
import VeltCustomization from "./VeltCustomization";

export default function Home() {
  return (
    <VeltProvider apiKey='krUVK3LgYeifgViaY3Oa' config={{
      version: '4.3.1-beta.2',
      develop: true,
    } as {
      version: string,
      develop: boolean,
    }}>
      <div className="flex flex-col h-screen bg-white">
        <Initialise />
        <Recorder />
        <VeltCustomization />
      </div>
    </VeltProvider>
  );
}
