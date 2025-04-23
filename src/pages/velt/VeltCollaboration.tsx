import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization';

// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.

export const VeltCollaboration = () => {

  return (
    <>
      <VeltInitializeUser />
      <VeltInitializeDocument />
      <VeltCustomization />
    </>
  );
};
