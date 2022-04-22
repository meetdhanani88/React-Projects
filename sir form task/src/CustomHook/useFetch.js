import { useEffect, useState } from 'react'

function useFetch(url) {

    const [data, setdata] = useState(false);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setdata(data));
    }, [url])


    if (data) {
        let [First, Second, third] = data;
        return [First, Second, third];
    }

}

export default useFetch;