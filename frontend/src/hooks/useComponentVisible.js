import { useState, useEffect, useRef } from 'react';

const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        console.log("outside");

        console.log(ref);
        console.log(ref.current);
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const props = {
        ref: ref,
        isComponentVisible: isComponentVisible,
        onChange: setIsComponentVisible
    }

    return props;
}

export default useComponentVisible;