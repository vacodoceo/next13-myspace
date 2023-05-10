import { Metadata } from "next";

export const dynamic = "force-static"; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

const Blog = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
};

export default Blog;
