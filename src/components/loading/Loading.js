import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;
const Loading = ({ children }) => {

    const drizzleStatus = useDrizzleState(state => state.drizzleStatus) 

    if (drizzleStatus.initialized === false) {
        return "Please wait. Loading..."
    }
    return (
        <>
            {children}
        </>
    )
}

export default Loading
