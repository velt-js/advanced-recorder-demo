import { VeltProvider } from "@veltdev/react";
import Initialise from "./Initialise";
import Recorder from "./Recorder";
import VeltCustomization from "./VeltCustomization";

export default function Home() {
  return (
    <VeltProvider apiKey='oGbYp7xKvkPGcawWbGKJ'>
      <div className="flex flex-col min-h-screen bg-white pt-16">
        <Initialise />
        <Recorder />
        <VeltCustomization />
      </div>
    </VeltProvider>
  );
}
