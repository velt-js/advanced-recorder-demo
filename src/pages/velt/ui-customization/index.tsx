import { useRecorderUtils, useVeltClient, useVeltEventCallback, VeltWireframe } from '@veltdev/react';
import { useEffect } from 'react';
import VeltMediaSourceSettings from './VeltMediaSourceSettings';
import VeltRecorderScreenTool from './VeltRecorderScreenTool';
import VeltRecordingPreviewStepsDialog from './VeltRecordingPreviewStepsDialog';
import VeltRecordingControlPanel from './VeltRecorderControlPanel';

const VeltCustomization = () => {
    const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
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
                        borderPosition: 'bottom'
                    });
                } else if (selections?.['audio-button']) {
                    recorderUtils?.enableRecordingMic();
                    recorderUtils?.disableRecordingTranscription();
                    client.setUiState({
                        borderPosition: null
                    });
                } else if (selections?.['turn-off-mic-button']) {
                    recorderUtils?.disableRecordingMic();
                    recorderUtils?.disableRecordingTranscription();
                    client.setUiState({
                        borderPosition: 'top'
                    });
                }
            }

            if (veltButtonClickEventData?.buttonContext?.clickedButtonId === 'retake-recording') {
                recorderUtils?.initRecording('screen');
            }
        }
    }, [veltButtonClickEventData, recorderUtils, client]);


    useEffect(() => {
        if (client) {
            client.setUiState({
                borderPosition: 'top'
            });
        }
    }, [client]);




    return (
        <VeltWireframe>
            <VeltRecorderScreenTool />
            <VeltMediaSourceSettings />
            <VeltRecordingControlPanel />
            {/* <VeltVideoEditorPlayer /> */}
            <VeltRecordingPreviewStepsDialog />
        </VeltWireframe >
    );
};

export default VeltCustomization;
