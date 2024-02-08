import { useEffect } from 'react'

export const Fetch = ({setData, setError, setLoading, id}) => {
    let url = `https://fakestoreapi.com/products/category/electronics`
    if (id){
        url = `https://fakestoreapi.com/products/${id}`
    }
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
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

