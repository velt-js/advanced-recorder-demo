import { VeltRecorderTool, VeltRecorderControlPanel, VeltRecorderPlayer, useRecordings } from "@veltdev/react";
import { RecorderData } from "@veltdev/types";
import { useEffect, useState } from "react";

export default function Recorder() {
    const [recordings, setRecordings] = useState<RecorderData[]>([]);

    const recordingsData = useRecordings();

    useEffect(() => {
        setRecordings(recordingsData);
    }, [recordingsData]);


    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen min-w-screen">
            <VeltRecorderTool type="screen" shadowDom={false}/>
            <VeltRecorderControlPanel autoOpenVideoEditor={true} settingsEmbedded={true} recordingCountdown={false} videoEditor={true}/>
            <div className="flex flex-col gap-4">
                {recordings.map((recording: RecorderData) => (
                    <div key={recording?.recorderId}>
                        <VeltRecorderPlayer recorderId={recording?.recorderId} />
                    </div>
                ))}
            </div>
        </div>
    );
}