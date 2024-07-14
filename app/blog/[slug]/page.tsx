"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blogtemplate from './blogtemplate';

interface BlogContentType {
    _id: string;
    title: string;
    content: string;
  }



const page = ({ params }: { params: { slug: string } }) => {
    let [BlogContent, setBlogContent] = useState<BlogContentType | null>(null);

    useEffect(() => {
        axios.get("http://localhost:5000/blog/bloglist")
            .then(res => {
                const blog = res.data.find((blog: { _id: string; }) => blog._id === params.slug);
                setBlogContent(blog);
                console.log(blog);
            })
            .catch(err => {
                console.error("Error fetching blog list: ", err);
            });
    }, []);


  return (
    <div>

        <Blogtemplate title={BlogContent.title} content={BlogContent.content} imageUrl={''}/>


    </div>
  )
}

export default page