import { VeltProvider } from "@veltdev/react";
import Recorder from "./Recorder";
import { VeltCollaboration } from "./velt/VeltCollaboration";

export default function Home() {
  return (
    <VeltProvider apiKey='oGbYp7xKvkPGcawWbGKJ'>
      <div className="flex flex-col min-h-screen bg-white pt-16">
        <VeltCollaboration />
        <Recorder />
      </div>
    </VeltProvider>
  );
}
