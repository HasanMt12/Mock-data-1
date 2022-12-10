import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import TableChart from './TableChart';

const Table = () => {
     const [taskData, setTaskData] = useState([]);
   
  const [perPage, setPage] = useState(10);

  const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first_name.toLowerCase();
    const b = rowB.last_name.toLowerCase();

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };
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
            sortable: true
        },
        {
            name: "first name",
            selector: (row) => row.last_name,
            sortable: true
        },
         {
             name: "email",
             selector: (row) => row.email,
             sortable: true
         },
         {
             name: "gender",
             selector: (row) => row.gender,
             sortable: true
         },
         {
             name: "ip Address",
             selector: (row) => row.ip_address,
             sortable: true
         },
        
         {
             name: "airport Code",
             selector: (row) => row.airportCode,
             sortable: true
         },

          {
             name: "time",
             selector: (row) => row.time,
             sortable: true
         },
           {
               name: "status",
               selector: (row) => row.status,
               sortable: true
           },
            {
             name: "mobile",
             selector: (row) => row.mobile,
             sortable: true
         },
          {
              name: "area",
              selector: (row) => row.area,
              sortable: true
          },
           {
               name: "show",
               selector: (row) => row.show,
               sortable: true
           },
            {
                edit: "show",
                selector: (row) => row.edit,
                sortable: true
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
             caseInsensitiveSort={caseInsensitiveSort}
            selectableRows
            selectableRowsHighlight
        />
        </div>
    );
};

export default Table;