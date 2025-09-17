import { useRecorderEventCallback, useRecorderUtils, useVeltClient, useVeltEventCallback, VeltWireframe } from '@veltdev/react';
import { useEffect, useState } from 'react';
import VeltMediaSourceSettings from './VeltMediaSourceSettings';
import VeltRecorderScreenTool from './VeltRecorderScreenTool';
import VeltRecordingPreviewStepsDialog from './VeltRecordingPreviewStepsDialog';
import VeltRecordingControlPanel from './VeltRecorderControlPanel';

const VeltCustomization = () => {
    const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
    const [buttonState, setButtonState] = useState<{
        playAudio: boolean;
        audio: boolean;
        turnOffMic: boolean;
        transcribe: boolean;
    }>({
        playAudio: false,
        audio: false,
        turnOffMic: false,
        transcribe: false,
    });
    const { client } = useVeltClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recorderUtils = useRecorderUtils();

    useEffect(() => {
        if (veltButtonClickEventData && client) {
            if (veltButtonClickEventData?.buttonContext?.type === 'single-select') {
                const selections = veltButtonClickEventData.buttonContext?.selections?.['transcribe-group'];
                if (selections?.['transcribe-button']) {
                    recorderUtils?.enableRecordingTranscription();
                    recorderUtils?.enableRecordingMic();
                    client.setUiState({
                        state: 'transcribe'
                    });
                    setButtonState((prev) => {
                        return {
                            ...prev,
                            transcribe: true,
                            audio: false,
                            turnOffMic: false,
                        }
                    })
                } else if (selections?.['audio-button']) {
                    recorderUtils?.enableRecordingMic();
                    recorderUtils?.disableRecordingTranscription();
                    client.setUiState({
                        state: 'audio'
                    });
                    setButtonState((prev) => {
                        return {
                            ...prev,
                            transcribe: false,
                            audio: true,
                            turnOffMic: false,
                        }
                    })
                } else if (selections?.['turn-off-mic-button']) {
                    recorderUtils?.disableRecordingMic();
                    recorderUtils?.disableRecordingTranscription();
                    client.setUiState({
                        state: 'turn-off-mic'
                    });
                    setButtonState((prev) => {
                        return {
                            ...prev,
                            transcribe: false,
                            audio: false,
                            turnOffMic: true,
                        }
                    })
                }
            }

            if (veltButtonClickEventData?.buttonContext?.type === 'button-toggle') {
                if (veltButtonClickEventData?.buttonContext?.clickedButtonId === 'play-audio-button') {
                    setButtonState((prev) => {
                        return {
                            ...prev,
                            playAudio: !prev.playAudio,
                        }
                    })
                }
            }

            if (veltButtonClickEventData?.buttonContext?.clickedButtonId === 'retake-recording') {
                recorderUtils?.initRecording('screen');
            }

            if (veltButtonClickEventData?.buttonContext?.clickedButtonId === 'audio-permission') {
                recorderUtils?.askDevicePermission({
                    audio: true,
                })
            }

            if (veltButtonClickEventData?.buttonContext?.clickedButtonId === 'record-screen-button') {
                recorderUtils?.requestScreenPermission();
            }
        }
    }, [veltButtonClickEventData, recorderUtils, client]);


    const recorderEventCallbackData = useRecorderEventCallback('recordingStarted');
    useEffect(() => {
        if (recorderEventCallbackData) {
            console.log(recorderEventCallbackData, buttonState);
        }
    }, [recorderEventCallbackData, buttonState]);


    useEffect(() => {
        if (client) {
            client.setUiState({
                state: 'turn-off-mic'
            });
        }
    }, [client]);




    return (
        <VeltWireframe>
            <VeltRecorderScreenTool />
            <VeltMediaSourceSettings />
            <VeltRecordingControlPanel />
            <VeltRecordingPreviewStepsDialog />
        </VeltWireframe >
    );
};

export default VeltCustomization;
