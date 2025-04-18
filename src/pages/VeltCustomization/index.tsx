import { useRecorderUtils, useVeltEventCallback, VeltButtonWireframe, VeltMediaSourceSettingsWireframe, VeltRecorderControlPanelWireframe, VeltRecorderScreenToolWireframe, VeltRecordingPreviewStepsDialogWireframe, VeltVideoEditorPlayerWireframe, VeltWireframe } from '@veltdev/react';
import { useEffect } from 'react';

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

            <VeltRecorderScreenToolWireframe>
                <div className='recorder-button-container'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M7.66634 8H8.33301M14.6663 8C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8C1.33301 4.3181 4.31778 1.33333 7.99967 1.33333C11.6816 1.33333 14.6663 4.3181 14.6663 8ZM11.333 8C11.333 9.84094 9.84062 11.3333 7.99967 11.3333C6.15873 11.3333 4.66634 9.84094 4.66634 8C4.66634 6.15905 6.15873 4.66666 7.99967 4.66666C9.84062 4.66666 11.333 6.15905 11.333 8ZM10.6663 8C10.6663 9.47275 9.47243 10.6667 7.99967 10.6667C6.52692 10.6667 5.33301 9.47275 5.33301 8C5.33301 6.52724 6.52692 5.33333 7.99967 5.33333C9.47243 5.33333 10.6663 6.52724 10.6663 8ZM9.99967 8C9.99967 9.10456 9.10424 10 7.99967 10C6.89511 10 5.99967 9.10456 5.99967 8C5.99967 6.89543 6.89511 6 7.99967 6C9.10424 6 9.99967 6.89543 9.99967 8ZM9.33301 8C9.33301 8.73637 8.73605 9.33333 7.99967 9.33333C7.26329 9.33333 6.66634 8.73637 6.66634 8C6.66634 7.26362 7.26329 6.66666 7.99967 6.66666C8.73605 6.66666 9.33301 7.26362 9.33301 8ZM8.66634 8C8.66634 8.36818 8.36786 8.66666 7.99967 8.66666C7.63148 8.66666 7.33301 8.36818 7.33301 8C7.33301 7.63181 7.63148 7.33333 7.99967 7.33333C8.36786 7.33333 8.66634 7.63181 8.66634 8Z" stroke="#E93328" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                    <span>Record Screen</span>
                </div>
            </VeltRecorderScreenToolWireframe>

            <VeltRecordingPreviewStepsDialogWireframe.Video>
                <div className="recording-preview-steps-dialog-video-wireframe-container">
                    <div className="left-panel">
                        <span className='preferences-label'>Preferences</span>
                        <VeltRecordingPreviewStepsDialogWireframe.Video.SettingsPanel />
                        <div className='divider'></div>
                        <VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel>
                            <div className="button-panel-container">
                                <VeltButtonWireframe id='transcribe-button' type='single-select' group='transcribe-group' active={true}>
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
                                                    <path d="M7.66634 8.00001H8.33301M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001ZM11.333 8.00001C11.333 9.84096 9.84062 11.3333 7.99967 11.3333C6.15873 11.3333 4.66634 9.84096 4.66634 8.00001C4.66634 6.15906 6.15873 4.66668 7.99967 4.66668C9.84062 4.66668 11.333 6.15906 11.333 8.00001ZM10.6663 8.00001C10.6663 9.47277 9.47243 10.6667 7.99967 10.6667C6.52692 10.6667 5.33301 9.47277 5.33301 8.00001C5.33301 6.52725 6.52692 5.33334 7.99967 5.33334C9.47243 5.33334 10.6663 6.52725 10.6663 8.00001ZM9.99967 8.00001C9.99967 9.10458 9.10424 10 7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001C5.99967 6.89544 6.89511 6.00001 7.99967 6.00001C9.10424 6.00001 9.99967 6.89544 9.99967 8.00001ZM9.33301 8.00001C9.33301 8.73639 8.73605 9.33334 7.99967 9.33334C7.26329 9.33334 6.66634 8.73639 6.66634 8.00001C6.66634 7.26363 7.26329 6.66668 7.99967 6.66668C8.73605 6.66668 9.33301 7.26363 9.33301 8.00001ZM8.66634 8.00001C8.66634 8.3682 8.36786 8.66668 7.99967 8.66668C7.63148 8.66668 7.33301 8.3682 7.33301 8.00001C7.33301 7.63182 7.63148 7.33334 7.99967 7.33334C8.36786 7.33334 8.66634 7.63182 8.66634 8.00001Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg className='inactive-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <circle cx="7.99967" cy="8.00001" r="6.66667" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </VeltButtonWireframe>
                                <VeltButtonWireframe id='audio-button' type='single-select' group='transcribe-group'>
                                    <div className='button-container'>
                                        <span className='button-container-icon'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 6.66667L2 9.33333M5 7.33333V8.66667M8 4V12M11 2V14M14 6.66667V9.33333" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className='button-container-label'>
                                            <span className='button-container-label-text'>Audio</span>
                                            <span className='button-container-label-subtext'>Some description</span>
                                        </div>
                                        <div className='button-container-radio-button'>
                                            <svg className='active-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M7.66634 8.00001H8.33301M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001ZM11.333 8.00001C11.333 9.84096 9.84062 11.3333 7.99967 11.3333C6.15873 11.3333 4.66634 9.84096 4.66634 8.00001C4.66634 6.15906 6.15873 4.66668 7.99967 4.66668C9.84062 4.66668 11.333 6.15906 11.333 8.00001ZM10.6663 8.00001C10.6663 9.47277 9.47243 10.6667 7.99967 10.6667C6.52692 10.6667 5.33301 9.47277 5.33301 8.00001C5.33301 6.52725 6.52692 5.33334 7.99967 5.33334C9.47243 5.33334 10.6663 6.52725 10.6663 8.00001ZM9.99967 8.00001C9.99967 9.10458 9.10424 10 7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001C5.99967 6.89544 6.89511 6.00001 7.99967 6.00001C9.10424 6.00001 9.99967 6.89544 9.99967 8.00001ZM9.33301 8.00001C9.33301 8.73639 8.73605 9.33334 7.99967 9.33334C7.26329 9.33334 6.66634 8.73639 6.66634 8.00001C6.66634 7.26363 7.26329 6.66668 7.99967 6.66668C8.73605 6.66668 9.33301 7.26363 9.33301 8.00001ZM8.66634 8.00001C8.66634 8.3682 8.36786 8.66668 7.99967 8.66668C7.63148 8.66668 7.33301 8.3682 7.33301 8.00001C7.33301 7.63182 7.63148 7.33334 7.99967 7.33334C8.36786 7.33334 8.66634 7.63182 8.66634 8.00001Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg className='inactive-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <circle cx="7.99967" cy="8.00001" r="6.66667" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </VeltButtonWireframe>
                                <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
                                    <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On>
                                        <div className='button-container'>
                                            <span className='button-container-icon'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.6663 6.66668V8.00001C12.6663 10.5773 10.577 12.6667 7.99967 12.6667M3.33301 6.66668V8.00001C3.33301 10.5773 5.42235 12.6667 7.99967 12.6667M7.99967 12.6667V14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V3.33334C5.99967 2.22877 6.89511 1.33334 7.99967 1.33334C9.10424 1.33334 9.99967 2.22877 9.99967 3.33334V8.00001C9.99967 9.10458 9.10424 10 7.99967 10Z" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <div className='button-container-label'>
                                                <span className='button-container-label-text'>Turn off microphone</span>
                                            </div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M7.66634 8.00001H8.33301M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001ZM11.333 8.00001C11.333 9.84096 9.84062 11.3333 7.99967 11.3333C6.15873 11.3333 4.66634 9.84096 4.66634 8.00001C4.66634 6.15906 6.15873 4.66668 7.99967 4.66668C9.84062 4.66668 11.333 6.15906 11.333 8.00001ZM10.6663 8.00001C10.6663 9.47277 9.47243 10.6667 7.99967 10.6667C6.52692 10.6667 5.33301 9.47277 5.33301 8.00001C5.33301 6.52725 6.52692 5.33334 7.99967 5.33334C9.47243 5.33334 10.6663 6.52725 10.6663 8.00001ZM9.99967 8.00001C9.99967 9.10458 9.10424 10 7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001C5.99967 6.89544 6.89511 6.00001 7.99967 6.00001C9.10424 6.00001 9.99967 6.89544 9.99967 8.00001ZM9.33301 8.00001C9.33301 8.73639 8.73605 9.33334 7.99967 9.33334C7.26329 9.33334 6.66634 8.73639 6.66634 8.00001C6.66634 7.26363 7.26329 6.66668 7.99967 6.66668C8.73605 6.66668 9.33301 7.26363 9.33301 8.00001ZM8.66634 8.00001C8.66634 8.3682 8.36786 8.66668 7.99967 8.66668C7.63148 8.66668 7.33301 8.3682 7.33301 8.00001C7.33301 7.63182 7.63148 7.33334 7.99967 7.33334C8.36786 7.33334 8.66634 7.63182 8.66634 8.00001Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                        </div>
                                    </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On>
                                    <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off>
                                        <div className='button-container'>
                                            <span className='button-container-icon'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99967 6.26668V3.33334C9.99967 2.22877 9.10424 1.33334 7.99967 1.33334C7.2146 1.33334 6.53517 1.78569 6.20781 2.44397M7.99967 12.6667V14.6667M7.99967 12.6667C5.42235 12.6667 3.33301 10.5773 3.33301 8.00001V6.66668M7.99967 12.6667C10.577 12.6667 12.6663 10.5773 12.6663 8.00001V6.66668M5.33301 14.6667H10.6663M1.33301 1.33334L14.6663 14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V6.00001L9.41474 9.41337C9.05275 9.7758 8.55239 10 7.99967 10Z" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <div className='button-container-label'>
                                                <span className='button-container-label-text'>Turn off microphone</span>
                                            </div>
                                            <div className='button-container-radio-button'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <circle cx="7.99967" cy="8.00001" r="6.66667" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off>
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


            <VeltMediaSourceSettingsWireframe>
                <div className='media-source-settings-container'>
                    <VeltMediaSourceSettingsWireframe.Video>
                        <div className='media-source-settings-overlay-container'>
                            <div className='settings-toggle-icon-container'>
                                <span className='settings-toggle-icon-container-icon'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.33301 14H10.6663M7.99967 11.3333V14M4.53301 11.3333H11.4663C12.5864 11.3333 13.1465 11.3333 13.5743 11.1153C13.9506 10.9236 14.2566 10.6176 14.4484 10.2413C14.6663 9.81349 14.6663 9.25344 14.6663 8.13333V5.2C14.6663 4.0799 14.6663 3.51984 14.4484 3.09202C14.2566 2.71569 13.9506 2.40973 13.5743 2.21799C13.1465 2 12.5864 2 11.4663 2H4.53301C3.4129 2 2.85285 2 2.42503 2.21799C2.0487 2.40973 1.74274 2.71569 1.55099 3.09202C1.33301 3.51984 1.33301 4.0799 1.33301 5.2V8.13333C1.33301 9.25344 1.33301 9.81349 1.55099 10.2413C1.74274 10.6176 2.0487 10.9236 2.42503 11.1153C2.85285 11.3333 3.4129 11.3333 4.53301 11.3333Z" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <VeltMediaSourceSettingsWireframe.Video.SelectedLabel />
                                <VeltMediaSourceSettingsWireframe.Video.ToggleIcon>
                                    <VeltMediaSourceSettingsWireframe.Video.ToggleIcon.Open>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </VeltMediaSourceSettingsWireframe.Video.ToggleIcon.Open>
                                    <VeltMediaSourceSettingsWireframe.Video.ToggleIcon.Close>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </VeltMediaSourceSettingsWireframe.Video.ToggleIcon.Close>
                                </VeltMediaSourceSettingsWireframe.Video.ToggleIcon>
                            </div>
                            <div className='settings-options-container'>
                                <VeltMediaSourceSettingsWireframe.Video.Options>
                                    <VeltMediaSourceSettingsWireframe.Video.Options.Item>
                                        <VeltMediaSourceSettingsWireframe.Video.Options.Item.Icon />
                                        <VeltMediaSourceSettingsWireframe.Video.Options.Item.Label />
                                    </VeltMediaSourceSettingsWireframe.Video.Options.Item>
                                </VeltMediaSourceSettingsWireframe.Video.Options>
                            </div>
                        </div>
                    </VeltMediaSourceSettingsWireframe.Video>

                    <VeltMediaSourceSettingsWireframe.Audio>
                        <div className='media-source-settings-overlay-container'>
                            <div className='settings-toggle-icon-container'>
                                <span className='settings-toggle-icon-container-icon'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6663 6.66668V8.00001C12.6663 10.5773 10.577 12.6667 7.99967 12.6667M3.33301 6.66668V8.00001C3.33301 10.5773 5.42235 12.6667 7.99967 12.6667M7.99967 12.6667V14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V3.33334C5.99967 2.22877 6.89511 1.33334 7.99967 1.33334C9.10424 1.33334 9.99967 2.22877 9.99967 3.33334V8.00001C9.99967 9.10458 9.10424 10 7.99967 10Z" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <VeltMediaSourceSettingsWireframe.Audio.SelectedLabel />

                                <VeltMediaSourceSettingsWireframe.Audio.ToggleIcon>
                                    <VeltMediaSourceSettingsWireframe.Audio.ToggleIcon.Open>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </VeltMediaSourceSettingsWireframe.Audio.ToggleIcon.Open>
                                    <VeltMediaSourceSettingsWireframe.Audio.ToggleIcon.Close>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </VeltMediaSourceSettingsWireframe.Audio.ToggleIcon.Close>
                                </VeltMediaSourceSettingsWireframe.Audio.ToggleIcon>
                            </div>

                            <div className='settings-options-container'>
                                <VeltMediaSourceSettingsWireframe.Audio.Options>
                                    <VeltMediaSourceSettingsWireframe.Audio.Options.Item>
                                        <VeltMediaSourceSettingsWireframe.Audio.Options.Item.Icon />
                                        <VeltMediaSourceSettingsWireframe.Audio.Options.Item.Label />
                                    </VeltMediaSourceSettingsWireframe.Audio.Options.Item>
                                </VeltMediaSourceSettingsWireframe.Audio.Options>
                            </div>
                        </div>
                    </VeltMediaSourceSettingsWireframe.Audio>
                </div>
            </VeltMediaSourceSettingsWireframe>

            <VeltRecorderControlPanelWireframe.FloatingMode>
                <div className="recording-preview-steps-dialog-video-wireframe-container center-container">
                    <div className="left-panel">
                        <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Stop>
                                <div className='recorder-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.3332 7.99999C15.3332 12.0501 12.0499 15.3333 7.99984 15.3333C3.94975 15.3333 0.666504 12.0501 0.666504 7.99999C0.666504 3.9499 3.94975 0.666656 7.99984 0.666656C12.0499 0.666656 15.3332 3.9499 15.3332 7.99999ZM5.69718 5.40599C5.83978 5.33332 6.02647 5.33332 6.39984 5.33332H9.59984C9.9732 5.33332 10.1599 5.33332 10.3025 5.40599C10.4279 5.4699 10.5299 5.57189 10.5938 5.69733C10.6665 5.83994 10.6665 6.02662 10.6665 6.39999V9.59999C10.6665 9.97336 10.6665 10.16 10.5938 10.3027C10.5299 10.4281 10.4279 10.5301 10.3025 10.594C10.1599 10.6667 9.9732 10.6667 9.59984 10.6667H6.39984C6.02647 10.6667 5.83978 10.6667 5.69718 10.594C5.57174 10.5301 5.46975 10.4281 5.40583 10.3027C5.33317 10.16 5.33317 9.97336 5.33317 9.59999V6.39999C5.33317 6.02662 5.33317 5.83994 5.40583 5.69733C5.46975 5.57189 5.57174 5.4699 5.69718 5.40599Z" fill="#E93328" />
                                        </g>
                                    </svg>
                                    <span>Stop Recording</span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Stop>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M6.3335 10V6M9.66683 10V6M14.6668 8C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8C1.3335 4.3181 4.31826 1.33333 8.00016 1.33333C11.6821 1.33333 14.6668 4.3181 14.6668 8Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>

                                    <span className='button-container-label-text'>
                                        Pause
                                    </span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Clear>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.3335 6.66667C1.3335 6.66667 2.67015 4.84548 3.75605 3.75883C4.84196 2.67218 6.34256 2 8.00016 2C11.3139 2 14.0002 4.68629 14.0002 8C14.0002 11.3137 11.3139 14 8.00016 14C5.26477 14 2.9569 12.1695 2.23467 9.66667M1.3335 6.66667V2.66667M1.3335 6.66667H5.3335" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className='button-container-label-text'>
                                        Clear
                                    </span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Clear>
                        </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar>
                    </div>
                    <div className="right-panel">
                        <div className="recorder-timer-container">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6665 8.00002H8.33317M11.3332 8.00002C11.3332 9.84097 9.84079 11.3334 7.99984 11.3334C6.15889 11.3334 4.6665 9.84097 4.6665 8.00002C4.6665 6.15907 6.15889 4.66669 7.99984 4.66669C9.84079 4.66669 11.3332 6.15907 11.3332 8.00002ZM10.6665 8.00002C10.6665 9.47278 9.4726 10.6667 7.99984 10.6667C6.52708 10.6667 5.33317 9.47278 5.33317 8.00002C5.33317 6.52726 6.52708 5.33335 7.99984 5.33335C9.4726 5.33335 10.6665 6.52726 10.6665 8.00002ZM9.99984 8.00002C9.99984 9.10459 9.10441 10 7.99984 10C6.89527 10 5.99984 9.10459 5.99984 8.00002C5.99984 6.89545 6.89527 6.00002 7.99984 6.00002C9.10441 6.00002 9.99984 6.89545 9.99984 8.00002ZM9.33317 8.00002C9.33317 8.7364 8.73622 9.33335 7.99984 9.33335C7.26346 9.33335 6.6665 8.7364 6.6665 8.00002C6.6665 7.26364 7.26346 6.66669 7.99984 6.66669C8.73622 6.66669 9.33317 7.26364 9.33317 8.00002ZM8.6665 8.00002C8.6665 8.36821 8.36803 8.66669 7.99984 8.66669C7.63165 8.66669 7.33317 8.36821 7.33317 8.00002C7.33317 7.63183 7.63165 7.33335 7.99984 7.33335C8.36803 7.33335 8.6665 7.63183 8.6665 8.00002Z" stroke="#E93328" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Time />
                        </div>
                        <VeltRecorderControlPanelWireframe.FloatingMode.Container>
                            <VeltRecorderControlPanelWireframe.FloatingMode.Video />
                            <VeltRecorderControlPanelWireframe.FloatingMode.CollapsedButton />
                            <VeltRecorderControlPanelWireframe.FloatingMode.Paused />
                        </VeltRecorderControlPanelWireframe.FloatingMode.Container>
                        <VeltRecorderControlPanelWireframe.FloatingMode.ScreenVideo>
                            <VeltRecorderControlPanelWireframe.FloatingMode.Screen />
                        </VeltRecorderControlPanelWireframe.FloatingMode.ScreenVideo>
                        <VeltRecorderControlPanelWireframe.FloatingMode.Loading />
                    </div>
                </div>
            </VeltRecorderControlPanelWireframe.FloatingMode>

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
        </VeltWireframe >
    );
};

export default VeltCustomization;
