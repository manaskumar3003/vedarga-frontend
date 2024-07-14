"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blogpage from './blogpage';

const Page = () => {
    let [Bloglist, setBloglist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/blog/bloglist")
            .then(res => {
                setBloglist(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error("Error fetching blog list: ", err);
            });
    }, []);

    return (<>

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">The Blog</h2>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {Bloglist.map((blog) => (
                    <Blogpage key={blog._id} title = {blog.title} slugurl={blog._id} content={blog.content}/>
                       
                ))}
        </div>
    </div>
                
                </>
           
    );
};

export default Page;
