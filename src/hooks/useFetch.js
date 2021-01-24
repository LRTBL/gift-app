import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(
        () => () => {
            isMounted.current = false;
        },
        [],
    );

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => isMounted.current && setstate({ ...state, data, loading: true }));
    }, [url]);

    return state;
};

export default useFetch;
