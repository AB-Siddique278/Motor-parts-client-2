import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('https://server2-sigma.vercel.app/service',{
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => setServices(data))


    }, []);
    return [services, setServices]
   
}
export default useServices;