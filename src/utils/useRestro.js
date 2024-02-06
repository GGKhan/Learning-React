import { useEffect , useState } from "react";
import { Menu_URL } from "./constants";

const useRestro = (resId) => {
    const [apiData , setApiData] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {

        const resData = await fetch(Menu_URL + resId);
        const jsonData = await resData.json();
        setApiData(jsonData.data);
    }

    return apiData

};


export default useRestro;