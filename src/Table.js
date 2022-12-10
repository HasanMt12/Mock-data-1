import React, { useEffect, useState } from 'react';
import TableChart from './TableChart';

const Table = () => {
     const [Tables, setTables] = useState([])
   

    useEffect(()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data) => setTables(data))
    },[])
    return (
        <div>
            {Tables.map(table=><TableChart
            key={table.id}
            table={table}
            >

            </TableChart>)}
        </div>
    );
};

export default Table;