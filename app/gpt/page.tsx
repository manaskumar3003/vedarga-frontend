"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Gpttemplate from './gpttemplate';

const page = () => {
    // let [Gpt, setGpt] = useState([]);

    // useEffect(() => {
    //     axios.post("http://localhost:5000/blog/gpt")
    //         .then(res => {
    //             setGpt(res.data);
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.error("Error fetching blog list: ", err);
    //         });
    // }, []);


  return (
    <div>

        {/* {Gpt} */}
        <Gpttemplate/>


    </div>
  )
}

export default page