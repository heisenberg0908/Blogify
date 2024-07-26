import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Header */}
      <header className="flex border-b p-4 justify-between bg-white shadow-sm">
        <div className="text-3xl font-semibold text-purple-700">Blogify</div>
        <div className="flex">
          <div className="p-2">
            <Button onClick={() => navigate('/signup')} placeholder={"Sign Up"} />
          </div>
          <div className="p-2">
            <Button onClick={() => navigate('/signin')} placeholder={"Sign In"} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-purple-500 text-white p-6">
        <section className="text-center">
          <h1 className="text-5xl font-semibold">Welcome to Blogify</h1>
          <p className="text-3xl font-light mt-2">Discover, Write, and Share Your Stories</p>
          <p className="text-xl font-thin mt-4">
            At Blogify, we believe everyone has a story to tell. Whether you're a seasoned writer or just getting started, our platform is designed to help you share your voice with the world.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Explore a World of Ideas</h2>
          <p className="text-xl font-thin mt-2">Dive into a vast library of blogs across various categories:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><b>Technology:</b> Stay updated with the latest trends and innovations.</li>
            <li><b>Lifestyle:</b> Get tips and inspiration for everyday living.</li>
            <li><b>Travel:</b> Discover new destinations and travel experiences.</li>
            <li><b>Food:</b> Explore recipes and culinary delights from around the globe.</li>
            <li><b>Personal Development:</b> Learn and grow with insights on self-improvement and productivity.</li>
          </ul>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-4xl font-semibold">Create Your Own Blog</h2>
          <Button className="mt-4" onClick={() => navigate('/signup')} placeholder={"Create Now"} />
          <img
            className="mt-6 w-full max-w-4xl mx-auto"
            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blogify"
          />
        </section>

        <section className="mt-8">
          <p className="text-2xl font-thin text-center">
            Join our community of passionate writers and start your own blog today. With our easy-to-use editor, you can:
          </p>
          <ul className="list-disc list-inside mt-4 pl-4 space-y-2">
            <li className="font-semibold">Write and edit posts seamlessly.</li>
            <li className="font-semibold">Add images and multimedia to enhance your content.</li>
            <li className="font-semibold">Customize your blog's look with a variety of themes and layouts.</li>
            <li className="font-semibold">Engage with readers through comments and feedback.</li>
          </ul>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-3xl font-semibold">Get Started Today</h2>
          <Button className="mt-4" onClick={() => navigate('/signup')} placeholder={"Start Now"} />
          <p className="mt-6 text-xl font-semibold">
            Ready to share your story? Sign up now and start blogging with Blogify. Whether you're here to read, write, or connect, there's something for everyone.
          </p>
          <p className="mt-2 text-xl font-semibold">Join us and become part of a community where every story matters.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t p-4 bg-slate-600">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-semibold">Blogify</div>
          <div className="text-sm font-thin">All rights reserved &copy; 2024</div>
        </div>
      </footer>
    </div>
  );
};
