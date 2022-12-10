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
            const response = await axios.get('data.json');
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
         {
             name: "email",
             selector: (row) => row.email,
         },
         {
             name: "gender",
             selector: (row) => row.gender,
         },
         {
             name: "ip Address",
             selector: (row) => row.ip_address,
         },
        
         {
             name: "airport Code",
             selector: (row) => row.airportCode,
         },

          {
             name: "time",
             selector: (row) => row.time,
         },
           {
               name: "status",
               selector: (row) => row.status,
           },
            {
             name: "mobile",
             selector: (row) => row.mobile,
         },
          {
              name: "area",
              selector: (row) => row.area,
          },
           {
               name: "show",
               selector: (row) => row.show,
           },
            {
                edit: "show",
                selector: (row) => row.edit,
            },


    ]
    
    useEffect(()=>{
       getTaskData();
    },[])

    return (
        <div className='w-10/12'>
            
            <DataTable
            title="Mock_Data-1"
            columns={columns}
            data={taskData}
            fixedHeader
            pagination
            selectableRows
            selectableRowsHighlight
        />
        </div>
    );
};

export default Table;