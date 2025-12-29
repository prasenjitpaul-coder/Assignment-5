import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const [Err, setErr] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (res.ok == false) {
                        throw new Error("Could Not Fetch Items From DataBase")
                    }
                    return res.json();
                })
                .then((data) => {
                    setdata(data);
                    setIsLoading(false);
                    setErr(null);
                })
                .catch(err => {
                    setErr(err.message);
                    setIsLoading(false);

                })
        }, 3000)

    }, [url]);

    return {data,IsLoading,Err}
}
export default useFetch;