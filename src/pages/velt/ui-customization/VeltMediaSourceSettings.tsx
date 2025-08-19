import { VeltButtonWireframe, VeltIf, VeltMediaSourceSettingsWireframe } from "@veltdev/react";

const VeltMediaSourceSettings = () => {
    return (
        <VeltMediaSourceSettingsWireframe>
            <div className='media-source-settings-container'>

                <VeltMediaSourceSettingsWireframe.Audio>
                    <div className='media-source-settings-overlay-container'>
                        <VeltButtonWireframe id='audio-permission' type='button'>
                            <div className='settings-toggle-icon-container'>
                                <span className='settings-toggle-icon-container-icon'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6663 6.66668V8.00001C12.6663 10.5773 10.577 12.6667 7.99967 12.6667M3.33301 6.66668V8.00001C3.33301 10.5773 5.42235 12.6667 7.99967 12.6667M7.99967 12.6667V14.6667M7.99967 10C6.89511 10 5.99967 9.10458 5.99967 8.00001V3.33334C5.99967 2.22877 6.89511 1.33334 7.99967 1.33334C9.10424 1.33334 9.99967 2.22877 9.99967 3.33334V8.00001C9.99967 9.10458 9.10424 10 7.99967 10Z" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <VeltIf condition="{selectedAudioDevice.label}">
                                    <VeltMediaSourceSettingsWireframe.Audio.SelectedLabel />
                                </VeltIf>
                                <VeltIf condition="!{selectedAudioDevice.label}">
                                    <span className='settings-toggle-icon-container-label'>No device found</span>
                                </VeltIf>
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
                        </VeltButtonWireframe>

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
    );
};

export default VeltMediaSourceSettings;