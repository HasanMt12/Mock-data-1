import React from 'react';

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
    return (
        <div>
            <h1>{email}</h1>
        </div>
    );
};

export default TableChart;