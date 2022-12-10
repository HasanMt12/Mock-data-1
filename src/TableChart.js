import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const TableChart = ({table}) => {
    const {
        first_name,
        last_name,
        email,
        gender,
        ip_address,
        airportCode,
        time,
        status,
        mobile,
        area,
        show,
        edit
    } = table;
    const [data, setData] = useState([])
    // const [loading, setLoading]= (false)
    // const [perPage , setPerPage] = useState(10)

    return (
        <div>
            {/* <h1>{email}</h1> */}
               <DataTable
           
            data={data}
        />
        </div>
    );
};

export default TableChart;