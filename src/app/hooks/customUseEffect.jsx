import { useEffect, useRef } from 'react';

const useCustomEffect = (callback, dependencies = []) => {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            callback();
            hasRun.current = true;
        }
    }, [callback, ...dependencies]);
};

export default useCustomEffect;

