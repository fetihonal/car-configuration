import React, { useState, useEffect } from 'react';
import axios from 'axios';

function datas() {
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        axios.get('https://joyamedya.com/cars/')
        .then(response => {
            const result = response
            setData(result.data);
        })
        .catch(error => {
            //TODO: handle the error when implemented
		})
		
    });
    return (
        <li>aa</li>
    )
    
}



export default datas