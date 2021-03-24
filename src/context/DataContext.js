import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();

function DataContextProvider(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=30')
        setData(response.data)
    }

  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;