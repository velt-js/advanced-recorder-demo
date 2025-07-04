import { VeltRecorderTool, VeltRecorderControlPanel, VeltRecorderPlayer, useRecordings, useRecorderEventCallback, useRecorderUtils } from "@veltdev/react";
import { RecorderData } from "@veltdev/types";
import { useEffect, useState } from "react";

export default function Recorder() {
    const [recordings, setRecordings] = useState<RecorderData[]>([]);

    const recordingsData = useRecordings();

    const recorderUtils = useRecorderUtils();

    useEffect(() => {
        setRecordings(recordingsData);
    }, [recordingsData]);

    const recordingEditDoneEvent = useRecorderEventCallback('recordingEditDone');
    useEffect(() => {
        if (recordingEditDoneEvent) {
            console.log('recordingEditDone: ', recordingEditDoneEvent);
        }
    }, [recordingEditDoneEvent]);

    const recordingDoneEvent = useRecorderEventCallback('recordingDone');
    useEffect(() => {
        if (recordingDoneEvent) {
            console.log('recordingDone: ', recordingDoneEvent);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            recorderUtils?.enableOnboardingTooltip();

            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                recorderUtils?.disableOnboardingTooltip()
            }, 5000);
        }
    }, [recordingDoneEvent, recorderUtils]);


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