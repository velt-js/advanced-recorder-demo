import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";

export const userService = () => {
    return {
        uid: "fbb8f1db-2f35-4904-9570-7de484769520",
        displayName: "Pam Beesly",
        email: "pam.beesly@dundermifflin.com",
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fpeppa_pig.svg?',
        organizationId: 'hudl'
    }
}

export default function Initialise() {
    const [yourAuthenticatedUser] = useState(userService());

    const { client } = useVeltClient();

    useEffect(() => {
        const initVelt = async () => {
            if (client && yourAuthenticatedUser) {

                const { uid, displayName, email, photoURL, organizationId } = yourAuthenticatedUser;

                const user = {
                    userId: uid,
                    name: displayName,
                    email: email,
                    photoUrl: photoURL,
                    organizationId: organizationId
                };

                await client.identify(user)
            }
        }
        initVelt().catch(console.error)
    }, [client, yourAuthenticatedUser]);

    useEffect(() => {
        if (client) {
            client.setDocument('advanced-recording-ui');
        }
    }, [client]);

    return (
        <></>
    );
}
