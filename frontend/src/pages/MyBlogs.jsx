import { useEffect, useState } from "react";
import { Button1 } from "../components/Button1";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BlogComponent } from "../components/BlogComponent";

export const MyBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get('http://localhost:3000/api/v1/blogs/myblogs', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const allBlogs = response.data.allBlogs;
                console.log(allBlogs);
                setBlogs(allBlogs || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <div className="border-b flex justify-between p-4">
                <div className="text-3xl font-semibold text-purple-700 p-2">Blogify</div>
                <div className="flex">
                    <Button1 onClick={() => navigate('/blogs')} placeholder={"Blogs"} />
                    <Button1 onClick={() => navigate('/postblog')} placeholder={"Post Blog"} />
                </div>
            </div>
            <div>
                {blogs.length > 0 ? 
                    blogs.map(blog => (
                        <BlogComponent
                            key={blog._id}
                            _id={blog._id}
                            title={blog.title}
                            author={blog.author}
                            description={blog.description}
                            date={blog.date}
                        />
                    )) : <div>No blogs found.</div>
                }
            </div>
        </div>
    );
};
