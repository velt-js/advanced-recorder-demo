import { useRecorderUtils, useVeltEventCallback, VeltWireframe } from '@veltdev/react';
import { useEffect } from 'react';
import VeltMediaSourceSettings from './VeltMediaSourceSettings';
import VeltRecorderScreenTool from './VeltRecorderScreenTool';
import VeltRecordingPreviewStepsDialog from './VeltRecordingPreviewStepsDialog';
import VeltVideoEditorPlayer from './VeltVideoEditorPlayer';
import VeltRecordingControlPanel from './VeltRecorderControlPanel';

const VeltCustomization = () => {
    const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
    const recorderUtils = useRecorderUtils();

    useEffect(() => {
        if (veltButtonClickEventData) {
            if (veltButtonClickEventData.buttonContext.type === 'single-select') {
                const selections = veltButtonClickEventData.buttonContext.selections?.['transcribe-group'];
                if (selections?.['transcribe-button']) {
                    recorderUtils?.enableRecordingTranscription();
                } else {
                    recorderUtils?.disableRecordingTranscription();
                }
            }
        }
    }, [veltButtonClickEventData, recorderUtils]);

    return (
        <VeltWireframe>
            <VeltRecorderScreenTool />
            <VeltMediaSourceSettings />
            <VeltRecordingControlPanel />
            <VeltVideoEditorPlayer />
            <VeltRecordingPreviewStepsDialog />
        </VeltWireframe >
    );
};

export default VeltCustomization;
