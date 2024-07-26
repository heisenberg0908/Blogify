import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button1 } from "../components/Button1";

export const FullBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate=useNavigate()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
                setBlog(response.data.blog);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="border-b p-4 flex justify-between">
                <div className="text-3xl font-semibold text-purple-700 p-2">Blogify</div>
                <div className="p-2 flex">
                    <Button1 onClick={()=>{
                        navigate('/blogs')
                    }} placeholder={"Blogs"}/>
                    <Button1 onClick={()=>{
                        navigate('/postblog')
                    }} placeholder={"Post Blog"}/>
                    <Button1 onClick={()=>{
                        navigate('/profile')
                    }} placeholder={"Profile"}/>
                </div>
            </div>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="text-3xl font-bold text-gray-700 mb-2">
                {blog.title}
            </div>
            <div className="text-sm font-thin text-gray-500 mb-4">
                {blog.author}
            </div>
            <div className="text-md text-gray-700 font-semilight mb-4">
                {blog.description}
            </div>
            <div className="text-gray-700">
                {blog.content}
            </div>
        </div>
    </div>
    );
};
