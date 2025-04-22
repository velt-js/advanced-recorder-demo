import { VeltButtonWireframe, VeltRecordingPreviewStepsDialogWireframe } from "@veltdev/react";

const VeltRecordingPreviewStepsDialog = () => {
    return (
        <VeltRecordingPreviewStepsDialogWireframe.Video>
            <div className="recording-preview-steps-dialog-video-wireframe-container">
                <div className="left-panel">
                    <span className='preferences-label'>Preferences</span>
                    <VeltRecordingPreviewStepsDialogWireframe.Video.SettingsPanel />
                    <div className='divider'></div>
                    <VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel>
                        <div className="button-panel-container">
                            <VeltButtonWireframe id='transcribe-button' type='multi-select' group='transcribe-group' active={true}>
                                <div className='button-container'>
                                    <span className='button-container-icon'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M9.58564 8.29475V9.4737C9.58564 11.7526 7.73822 13.6 5.45932 13.6M1.33301 8.29475V9.4737C1.33301 11.7526 3.18042 13.6 5.45932 13.6M5.45932 13.6V15.3684M5.45932 11.2421C4.48265 11.2421 3.6909 10.4504 3.6909 9.4737V5.34738C3.6909 4.37071 4.48265 3.57896 5.45932 3.57896C6.436 3.57896 7.22774 4.37071 7.22774 5.34738V9.4737C7.22774 10.4504 6.436 11.2421 5.45932 11.2421ZM12.3856 0.631592L11.8894 1.92187C11.7706 2.2306 11.7113 2.38497 11.6189 2.51481C11.5371 2.62989 11.4366 2.73043 11.3215 2.81226C11.1916 2.90459 11.0373 2.96396 10.7286 3.0827L9.43827 3.57896L10.7286 4.07522C11.0373 4.19396 11.1916 4.25333 11.3215 4.34566C11.4366 4.42749 11.5371 4.52803 11.6189 4.64311C11.7113 4.77296 11.7706 4.92732 11.8894 5.23605L12.3856 6.52633L12.8819 5.23605C13.0006 4.92732 13.06 4.77296 13.1523 4.64311C13.2342 4.52803 13.3347 4.42749 13.4498 4.34566C13.5796 4.25333 13.734 4.19396 14.0427 4.07522L15.333 3.57896L14.0427 3.0827C13.734 2.96396 13.5796 2.90459 13.4498 2.81226C13.3347 2.73043 13.2342 2.62989 13.1523 2.51481C13.06 2.38497 13.0006 2.2306 12.8819 1.92187L12.3856 0.631592Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </span>
                                    <div className='button-container-label'>
                                        <span className='button-container-label-text'>Transcribe</span>
                                        <span className='button-container-label-subtext'>Some description</span>
                                    </div>
                                    <div className='button-container-radio-button'>
                                        <svg className='active-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <rect width="16" height="16" rx="2" fill="black" />
                                                <path d="M4.3335 8.00004L7.00016 10.6667L12.3335 5.33337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>

                                        <svg className='inactive-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="1.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </VeltButtonWireframe>
                            <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
                                <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off>
                                    <div className='button-container'>
                                        <span className='button-container-icon'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99967 6.26668V3.33334C9.99967 2.22877 9.10424 1.33334 7.99967 1.33334C7.2146 1.33334 6.53517 1.78569 6.20781 2.44397M7.99967 12.6667V14.6667M7.99967 12.6667C5.42235 12.6667 3.33301 10.5773 3.33301 8.00001V6.66668M7.99967 12.6667C10.577 12.6667 12.6663 10.5773 12.6663 8.00001V6.66668M5.33301 14.6667H10.6663M1.33301 1.33334L14.6663 14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V6.00001L9.41474 9.41337C9.05275 9.7758 8.55239 10 7.99967 10Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className='button-container-label'>
                                            <span className='button-container-label-text'>Turn off microphone</span>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <rect width="16" height="16" rx="2" fill="black" />
                                                <path d="M4.3335 8.00004L7.00016 10.6667L12.3335 5.33337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off>
                                <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On>
                                    <div className='button-container'>
                                        <span className='button-container-icon'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99967 6.26668V3.33334C9.99967 2.22877 9.10424 1.33334 7.99967 1.33334C7.2146 1.33334 6.53517 1.78569 6.20781 2.44397M7.99967 12.6667V14.6667M7.99967 12.6667C5.42235 12.6667 3.33301 10.5773 3.33301 8.00001V6.66668M7.99967 12.6667C10.577 12.6667 12.6663 10.5773 12.6663 8.00001V6.66668M5.33301 14.6667H10.6663M1.33301 1.33334L14.6663 14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V6.00001L9.41474 9.41337C9.05275 9.7758 8.55239 10 7.99967 10Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className='button-container-label'>
                                            <span className='button-container-label-text'>Turn off microphone</span>
                                        </div>
                                        <div className='button-container-radio-button'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="1.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On>
                            </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
                            <VeltRecordingPreviewStepsDialogWireframe.Video.StartRecording>
                                <div className='recorder-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M7.66634 8H8.33301M14.6663 8C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8C1.33301 4.3181 4.31778 1.33333 7.99967 1.33333C11.6816 1.33333 14.6663 4.3181 14.6663 8ZM11.333 8C11.333 9.84094 9.84062 11.3333 7.99967 11.3333C6.15873 11.3333 4.66634 9.84094 4.66634 8C4.66634 6.15905 6.15873 4.66666 7.99967 4.66666C9.84062 4.66666 11.333 6.15905 11.333 8ZM10.6663 8C10.6663 9.47275 9.47243 10.6667 7.99967 10.6667C6.52692 10.6667 5.33301 9.47275 5.33301 8C5.33301 6.52724 6.52692 5.33333 7.99967 5.33333C9.47243 5.33333 10.6663 6.52724 10.6663 8ZM9.99967 8C9.99967 9.10456 9.10424 10 7.99967 10C6.89511 10 5.99967 9.10456 5.99967 8C5.99967 6.89543 6.89511 6 7.99967 6C9.10424 6 9.99967 6.89543 9.99967 8ZM9.33301 8C9.33301 8.73637 8.73605 9.33333 7.99967 9.33333C7.26329 9.33333 6.66634 8.73637 6.66634 8C6.66634 7.26362 7.26329 6.66666 7.99967 6.66666C8.73605 6.66666 9.33301 7.26362 9.33301 8ZM8.66634 8C8.66634 8.36818 8.36786 8.66666 7.99967 8.66666C7.63148 8.66666 7.33301 8.36818 7.33301 8C7.33301 7.63181 7.63148 7.33333 7.99967 7.33333C8.36786 7.33333 8.66634 7.63181 8.66634 8Z" stroke="#E93328" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <span>Record</span>
                                </div>
                            </VeltRecordingPreviewStepsDialogWireframe.Video.StartRecording>
                            <VeltRecordingPreviewStepsDialogWireframe.Video.CloseButton>
                                <div className='outline-button-container'>
                                    <span className='button-container-label-text'>
                                        Cancel
                                    </span>
                                </div>
                            </VeltRecordingPreviewStepsDialogWireframe.Video.CloseButton>
                        </div>
                    </VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel>
                </div>
                <div className="right-panel">
                    <VeltRecordingPreviewStepsDialogWireframe.Video.VideoPlayer />
                </div>
            </div>
        </VeltRecordingPreviewStepsDialogWireframe.Video >
    );
};

export default VeltRecordingPreviewStepsDialog;