import { useEffect } from 'react'

export const Fetch = ({setData, setError, setLoading}) => {

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `https://fakestoreapi.com/products//category/electronics`
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            console.log(actualData)
            setData(actualData);
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
      }, [])

}

