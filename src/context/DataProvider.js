import user_data from '../data'
import { createContext, useState } from "react";

//This is where the data will be stored
const DataContext = createContext()

// This what will be wrapping our app with so that every component will have access to the context
export function DataProvider(props) {
    
    const [data, setData] = useState(user_data)
    let contextData = {
        data,
        setData
    } 

    return (
        <DataContext.Provider value={contextData}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext;