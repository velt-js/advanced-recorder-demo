import { VeltButtonWireframe, VeltIf, VeltRecorderControlPanelWireframe } from "@veltdev/react";

const VeltRecordingControlPanel = () => {
    return (
        <VeltRecorderControlPanelWireframe.FloatingMode>
            <div className="recording-preview-steps-dialog-video-wireframe-container center-container">
                <div className="left-panel">
                    <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar>
                        <VeltIf condition="{recordingStatus} !== 'paused'">
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
                        </VeltIf>
                        <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Pause>
                                <div className='recorder-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M7.66683 7.99998H8.3335M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998ZM11.3335 7.99998C11.3335 9.84093 9.84111 11.3333 8.00016 11.3333C6.15921 11.3333 4.66683 9.84093 4.66683 7.99998C4.66683 6.15903 6.15921 4.66665 8.00016 4.66665C9.84111 4.66665 11.3335 6.15903 11.3335 7.99998ZM10.6668 7.99998C10.6668 9.47274 9.47292 10.6666 8.00016 10.6666C6.5274 10.6666 5.3335 9.47274 5.3335 7.99998C5.3335 6.52722 6.5274 5.33331 8.00016 5.33331C9.47292 5.33331 10.6668 6.52722 10.6668 7.99998ZM10.0002 7.99998C10.0002 9.10455 9.10473 9.99998 8.00016 9.99998C6.89559 9.99998 6.00016 9.10455 6.00016 7.99998C6.00016 6.89541 6.89559 5.99998 8.00016 5.99998C9.10473 5.99998 10.0002 6.89541 10.0002 7.99998ZM9.3335 7.99998C9.3335 8.73636 8.73654 9.33331 8.00016 9.33331C7.26378 9.33331 6.66683 8.73636 6.66683 7.99998C6.66683 7.2636 7.26378 6.66665 8.00016 6.66665C8.73654 6.66665 9.3335 7.2636 9.3335 7.99998ZM8.66683 7.99998C8.66683 8.36817 8.36835 8.66665 8.00016 8.66665C7.63197 8.66665 7.3335 8.36817 7.3335 7.99998C7.3335 7.63179 7.63197 7.33331 8.00016 7.33331C8.36835 7.33331 8.66683 7.63179 8.66683 7.99998Z" stroke="#E93328" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>

                                    <span>Continue Recording</span>
                                </div>
                            </VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Pause>
                            <VeltRecorderControlPanelWireframe.FloatingMode.ActionBar.Toggle.Play>
                                <div className='outline-button-container'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.3335 10V6M9.66683 10V6M14.6668 8C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8C1.3335 4.3181 4.31826 1.33333 8.00016 1.33333C11.6821 1.33333 14.6668 4.3181 14.6668 8Z" stroke="#212121" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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