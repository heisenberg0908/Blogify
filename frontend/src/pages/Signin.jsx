import { useState } from "react";
import { Button } from "../components/Button";
import { InputBar } from "../components/InputBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // Add error state
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/signin', {
        userName,
        password
      });
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      navigate('/blogs');
    } catch (error) {
      setError("Sign-in failed. Please check your credentials and try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-100">
      <div className="border-b rounded-xl flex p-4 justify-between w-full max-w-4xl">
        <div className="text-3xl font-semibold text-purple-700">Blogify</div>
        <div className="p-2">
          <Button
            onClick={() => navigate("/signup")}
            placeholder={"Sign Up"}
          />
        </div>
      </div>
      <div className="w-full max-w-md mt-8 p-6 bg-white shadow-md rounded-md">
        <div className="text-2xl text-purple-700 font-semibold flex justify-center mb-4">
          Sign In
        </div>
        <div className="space-y-4">
          <InputBar
            onChange={(e) => setUserName(e.target.value)}
            label={"Username"}
            placeholder={" eg: john@gmail.com"}
          />
          <InputBar
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder={" eg: John@1234"}
            type="password"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleSignin}
            placeholder={"Sign in"}
          />
        </div>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}  {/* Display error */}
      </div>
    </div>
  );
};
