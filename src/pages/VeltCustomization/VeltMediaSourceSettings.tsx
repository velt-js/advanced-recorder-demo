import { VeltMediaSourceSettingsWireframe } from "@veltdev/react";

const VeltMediaSourceSettings = () => {
    return (
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
    );
};

export default VeltMediaSourceSettings;