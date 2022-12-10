import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import TableChart from './TableChart';

const Table = () => {
     const [taskData, setTaskData] = useState([]);
   

    // useEffect(()=>{
    //     fetch('data.json')
    //     .then((res)=>res.json())
    //     .then((data) => setTables(data))
    // },[])
    const getTaskData = async ()=> {
        try{
            const response = await axios.get('https://sheetdb.io/api/v1/negm5d2pso15z');
            setTaskData(response.data)
        }catch(error){
                console.log(error);
        }
    }
    console.log(taskData);
    const columns = [
        {
            name: "first name",
            selector: (row)=> row.first_name,
        },
          {
              name: "first name",
              selector: (row) => row.last_name,
          },

    ]
    
    useEffect(()=>{
       getTaskData();
    },[])

    return (
        <div>
            
            <DataTable
            columns={columns}
            data={taskData}
        />
        </div>
    );
};

export default Table;