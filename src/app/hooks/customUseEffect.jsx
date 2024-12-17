import { useEffect, useRef } from 'react';

const useCustomEffect = (callback, dependencies = []) => {
    const hasRun = useRef(false);

    useEffect(() => {
        // Only execute if it hasn't run before
        if (!hasRun.current) {
            callback();
            hasRun.current = true;
        }
    }, [...dependencies]); // Dependencies still tracked but callback only runs once
};

export default useCustomEffect;

