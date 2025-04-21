import { VeltVideoEditorPlayerWireframe } from "@veltdev/react";

const VeltVideoEditorPlayer = () => {
    return (
        <VeltVideoEditorPlayerWireframe>
            <div className='velt-video-editor-player--header'>
                <VeltVideoEditorPlayerWireframe.ApplyButton>
                    <VeltVideoEditorPlayerWireframe.ApplyButton.Loading />
                    <span>Done</span>
                </VeltVideoEditorPlayerWireframe.ApplyButton>
                <VeltVideoEditorPlayerWireframe.CloseButton />
            </div>
            <VeltVideoEditorPlayerWireframe.Preview>
                <VeltVideoEditorPlayerWireframe.Preview.Loading />
                <VeltVideoEditorPlayerWireframe.Preview.Video />
            </VeltVideoEditorPlayerWireframe.Preview>

            <div className='video-editor-player-container'>
                <div className='video-editor-player-actions'>
                    <VeltVideoEditorPlayerWireframe.SplitButton>
                        <div className='video-editor-player-split-button'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.66667L5.66667 10.3333M5.66667 5.66667L13.3333 13.3333M4 2C5.10457 2 6 2.89543 6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2ZM4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Cut video
                        </div>
                    </VeltVideoEditorPlayerWireframe.SplitButton>
                    <VeltVideoEditorPlayerWireframe.DeleteButton />
                </div>
                <div className='video-editor-player-footer'>
                    <VeltVideoEditorPlayerWireframe.ToggleButton />
                    <VeltVideoEditorPlayerWireframe.Timeline />
                </div>
            </div>
        </VeltVideoEditorPlayerWireframe>
    );
};

export default VeltVideoEditorPlayer;