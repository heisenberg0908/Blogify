import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BlogComponent } from "../components/BlogComponent";
import { Button1 } from "../components/Button1";

export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/blogs/all');
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
            <div className="border-b p-4 flex justify-between">
                <div className="text-3xl font-semibold p-4 text-purple-700">Blogify</div>
                <div className="flex p-4">
                    <Button1 onClick={() => { navigate('/postblog'); }} placeholder={"Post Blog"} />
                    <Button1 onClick={() => { navigate('/myblogs'); }} placeholder={"My Blogs"} />
                    <Button1 onClick={() => { navigate('/profile'); }} placeholder={"Profile"} />
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
