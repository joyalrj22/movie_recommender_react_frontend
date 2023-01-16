import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [queryMatched, setQueryMatched] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== queryMatched) {
            setQueryMatched(media.matches);
        }

        const listener = () => setQueryMatched(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [queryMatched, query]);
    return queryMatched;
}

export default useMediaQuery;