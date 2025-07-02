import { VeltButtonWireframe, VeltIf, VeltRecorderControlPanelWireframe } from "@veltdev/react";

const VeltRecordingControlPanel = () => {
    return (
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
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Pause>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 2.66667V13.3333C3.99997 13.452 4.03158 13.5684 4.09159 13.6708C4.15159 13.7731 4.23781 13.8575 4.34135 13.9154C4.44489 13.9733 4.562 14.0025 4.68059 14C4.79918 13.9976 4.91497 13.9635 5.016 13.9013L13.6827 8.568C13.7797 8.50836 13.8599 8.42483 13.9155 8.3254C13.9711 8.22596 14.0003 8.11393 14.0003 8C14.0003 7.88608 13.9711 7.77405 13.9155 7.67461C13.8599 7.57518 13.7797 7.49165 13.6827 7.432L5.016 2.09867C4.91497 2.03651 4.79918 2.00244 4.68059 1.99996C4.562 1.99749 4.44489 2.0267 4.34135 2.08458C4.23781 2.14246 4.15159 2.22692 4.09159 2.32925C4.03158 2.43157 3.99997 2.54805 4 2.66667Z" fill="black" />
                                    </svg>

                                    <span className='button-container-label-text'>
                                        Play
                                    </span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Pause>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Play>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66667 2.66666H4V13.3333H6.66667V2.66666Z" fill="black" />
                                        <path d="M11.9997 2.66666H9.33301V13.3333H11.9997V2.66666Z" fill="black" />
                                    </svg>

                                    <span className='button-container-label-text'>
                                        Pause
                                    </span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Play>
                        </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle>
                        <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Clear>
                            <VeltButtonWireframe id='retake-recording' type='button'>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.3335 6.66667C1.3335 6.66667 2.67015 4.84548 3.75605 3.75883C4.84196 2.67218 6.34256 2 8.00016 2C11.3139 2 14.0002 4.68629 14.0002 8C14.0002 11.3137 11.3139 14 8.00016 14C5.26477 14 2.9569 12.1695 2.23467 9.66667M1.3335 6.66667V2.66667M1.3335 6.66667H5.3335" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span className='button-container-label-text'>
                                        Retake
                                    </span>
                                </div>
                            </VeltButtonWireframe>
                        </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Clear>
                    </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar>
                </div>
                <div className="right-panel">
                    <VeltIf condition="!{keepOpen}">
                        <div className="recorder-timer-container">
                            <VeltIf condition="{recordingStatus} !== 'paused'">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.6665 8.00002H8.33317M11.3332 8.00002C11.3332 9.84097 9.84079 11.3334 7.99984 11.3334C6.15889 11.3334 4.6665 9.84097 4.6665 8.00002C4.6665 6.15907 6.15889 4.66669 7.99984 4.66669C9.84079 4.66669 11.3332 6.15907 11.3332 8.00002ZM10.6665 8.00002C10.6665 9.47278 9.4726 10.6667 7.99984 10.6667C6.52708 10.6667 5.33317 9.47278 5.33317 8.00002C5.33317 6.52726 6.52708 5.33335 7.99984 5.33335C9.4726 5.33335 10.6665 6.52726 10.6665 8.00002ZM9.99984 8.00002C9.99984 9.10459 9.10441 10 7.99984 10C6.89527 10 5.99984 9.10459 5.99984 8.00002C5.99984 6.89545 6.89527 6.00002 7.99984 6.00002C9.10441 6.00002 9.99984 6.89545 9.99984 8.00002ZM9.33317 8.00002C9.33317 8.7364 8.73622 9.33335 7.99984 9.33335C7.26346 9.33335 6.6665 8.7364 6.6665 8.00002C6.6665 7.26364 7.26346 6.66669 7.99984 6.66669C8.73622 6.66669 9.33317 7.26364 9.33317 8.00002ZM8.6665 8.00002C8.6665 8.36821 8.36803 8.66669 7.99984 8.66669C7.63165 8.66669 7.33317 8.36821 7.33317 8.00002C7.33317 7.63183 7.63165 7.33335 7.99984 7.33335C8.36803 7.33335 8.6665 7.63183 8.6665 8.00002Z" stroke="#E93328" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </VeltIf>
                            <VeltIf condition="{recordingStatus} === 'paused'">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4.11112C4 3.68157 4.35817 3.33334 4.8 3.33334H5.6C6.04183 3.33334 6.4 3.68157 6.4 4.11112V11.8889C6.4 12.3185 6.04183 12.6667 5.6 12.6667H4.8C4.35817 12.6667 4 12.3185 4 11.8889V4.11112Z" fill="#BDBDBD" />
                                    <path d="M9.6 4.11112C9.6 3.68157 9.95817 3.33334 10.4 3.33334H11.2C11.6418 3.33334 12 3.68157 12 4.11112V11.8889C12 12.3185 11.6418 12.6667 11.2 12.6667H10.4C9.95817 12.6667 9.6 12.3185 9.6 11.8889V4.11112Z" fill="#BDBDBD" />
                                </svg>
                            </VeltIf>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Time />
                        </div>
                    </VeltIf>

                    <VeltRecorderControlPanelWireframe.FloatingMode.Container>
                        <VeltRecorderControlPanelWireframe.FloatingMode.Video />
                        <VeltRecorderControlPanelWireframe.FloatingMode.CollapsedButton />
                        <VeltRecorderControlPanelWireframe.FloatingMode.Paused />
                    </VeltRecorderControlPanelWireframe.FloatingMode.Container>
                    <VeltRecorderControlPanelWireframe.FloatingMode.ScreenMiniContainer>
                        <VeltRecorderControlPanelWireframe.FloatingMode.Screen />
                        <VeltRecorderControlPanelWireframe.FloatingMode.Waveform />
                    </VeltRecorderControlPanelWireframe.FloatingMode.ScreenMiniContainer>

                    <VeltRecorderControlPanelWireframe.FloatingMode.Loading />
                </div>
            </div>
        </VeltRecorderControlPanelWireframe.FloatingMode>
    );
};

export default VeltRecordingControlPanel;