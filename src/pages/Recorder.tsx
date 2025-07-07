import { VeltRecorderTool, VeltRecorderControlPanel, VeltRecorderPlayer, useRecordings, useRecorderEventCallback, useRecorderUtils, useVeltInitState } from "@veltdev/react";
import { RecorderData } from "@veltdev/types";
import { useEffect, useState } from "react";

export default function Recorder() {
    const [recordings, setRecordings] = useState<RecorderData[]>([]);

    const recordingsData = useRecordings();

    const recorderUtils = useRecorderUtils();

    const initState = useVeltInitState();

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

            // setTimeout(() => {
            //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //     // @ts-ignore
            //     recorderUtils?.disableOnboardingTooltip()
            // }, 5000);
        }
    }, [recordingDoneEvent, recorderUtils]);

    useEffect(() => {
        console.log('initState: ', initState);
    }, [initState]);


    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen min-w-screen">
            {!initState && <div className="loader"></div>}
            {initState && <>
                <VeltRecorderTool type="screen" shadowDom={false} variant="tool1" />
                <VeltRecorderTool type="screen" shadowDom={false} variant="tool2" />

                <VeltRecorderControlPanel autoOpenVideoEditor={true} settingsEmbedded={true} recordingCountdown={false} videoEditor={true} retakeOnVideoEditor={true} />
                <div className="flex flex-col gap-4">
                    {recordings.map((recording: RecorderData) => (
                        <div key={recording?.recorderId}>
                            <VeltRecorderPlayer recorderId={recording?.recorderId} />
                        </div>
                    ))}
                </div>
            </>}
        </div>
    );
}