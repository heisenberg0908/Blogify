import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button1 } from "../components/Button1";
import { InputBar } from "../components/InputBar";
import { Button } from "../components/Button";
import axios from "axios";

export const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/blogs/postblog', {
        title,
        description,
        author
      });
      console.log(response.data);
      setSuccessMessage("Blog posted successfully!");
      // Optionally, you can clear the form fields after successful post
      setTitle("");
      setDescription("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setSuccessMessage("Failed to post blog. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Header */}
      <header className="border-b p-4 flex justify-between bg-white shadow-sm">
        <div className="text-3xl font-semibold text-purple-700">Blogify</div>
        <div className="flex space-x-4">
          <Button1 onClick={() => navigate('/blogs')} placeholder={"Blogs"} />
          <Button1 onClick={() => navigate('/myblogs')} placeholder={"My Blogs"} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-semibold text-center text-slate-700 mb-6">Create Your Blog</h1>
        <div className="mx-auto w-full max-w-2xl bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <InputBar
              onChange={(e) => setTitle(e.target.value)}
              placeholder={" eg: AI: The Unknown Future"}
              label={"Title"}
              value={title}
            />
          </div>
          <div className="mb-4">
            <InputBar
              onChange={(e) => setAuthor(e.target.value)}
              placeholder={" eg: Orion"}
              label={"Author"}
              value={author}
            />
          </div>
          <div className="mb-4">
            <InputBar
              onChange={(e) => setDescription(e.target.value)}
              placeholder={" eg: The next coming generation is of AI..."}
              label={"Body"}
              isTextarea={true}
              value={description}
            />
          </div>
          <div className="flex justify-center mt-6">
            <Button onClick={handlePost} placeholder={"Post Blog"} />
          </div>
          {successMessage && (
            <div className="mt-4 text-center text-green-600">
              {successMessage}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
