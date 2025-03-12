"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    img: "",
    category: "",
    user: "",
  });
 
  
function decodeJwt(token) {
  if (!token) return null;

  const base64Url = token.split('.')[1]; 
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 
  const decodedPayload = JSON.parse(atob(base64)); 
  return decodedPayload;
}

  
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://peaceful-tapioca-967709.netlify.app/"
      : "http://localhost:8080/https://peaceful-tapioca-967709.netlify.app/";


      const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/api/blogs`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } 
    };
    
      useEffect(() => {
        const tokens = Cookies.get("token");
        setToken(tokens);
    
        if (tokens) {
          const decodedToken = decodeJwt(tokens); 
          setNewBlog((prevBlog) => ({
            ...prevBlog,
            user: decodedToken?.userId || "", 
          }));
          fetchBlogs();
        } else {
          setCreateError("Unauthorized");
          setLoading(false);
        }
      }, [token]);
    
      const handleCreateBlog = async (e) => {
        e.preventDefault();
        setCreateLoading(true);
        setCreateError("");
        
        try {
          const response = await fetch(`${baseUrl}/api/blogs/createblog`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBlog),
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || "Failed to create blog");
          }
          
          setNewBlog({
            title: "",
            content: "",
            img: "",
            category: "",
            user: newBlog.user, 
          });
          
          setShowCreateModal(false);
          fetchBlogs();
          
          alert(t("blogCreatedSuccess") );
        } catch (error) {
          console.error("Error creating blog:", error);
          setCreateError(error.message || "An error occurred while creating the blog");
        } finally {
          setCreateLoading(false);
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog({
          ...newBlog,
          [name]: value,
        });
      };
    
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Blog Header */}
      <div className="bg-Gray px-4 sm:px-6 md:px-10 py-8 md:py-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          {t("blogTitle") }
        </h1>
        <p className="text-center mt-4 max-w-2xl mx-auto font-light text-sm md:text-base">
          {t("blogDescription") }
        </p>

        {/* Create Blog Button */}
        {token && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-200 ease-linear flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>
              {t("createBlog") }
            </button>
          </div>
        )}
      </div>

      {/* Blog Grid */}
      <div className="px-4 sm:px-6 md:px-10 py-8 md:py-12">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl">{t("noBlogs") }</p>
            {token && (
              <button
                onClick={() => setShowCreateModal(true)}
                className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-200 ease-linear"
              >
                {t("createFirst")  }
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden">
                  {blog.img && (
                    <img
                      src={blog.img}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/api/placeholder/500/300";
                      }}
                    />
                  )}
                </div>
                <div className="p-4 md:p-6">
                  {blog.category && (
                    <span className="bg-Gray text-xs px-2 py-1 rounded-full inline-block mb-2">
                      {blog.category}
                    </span>
                  )}
                  <h2 className="font-bold text-lg md:text-xl mb-2">{blog.title}</h2>
                  <p className="text-sm md:text-base line-clamp-3 mb-4">{blog.content}</p>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-sm font-medium hover:underline flex items-center"
                  >
                    {t("readMore") } →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Blog Post Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-90vh overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-xl">{selectedBlog.title}</h2>
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-2 hover:bg-Gray rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="p-4 md:p-6">
              {selectedBlog.img && (
                <div className="relative h-64 md:h-80 w-full mb-6 rounded-xl overflow-hidden">
                  <img
                    src={selectedBlog.img}
                    alt={selectedBlog.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/800/400";
                    }}
                  />
                </div>
              )}
              {selectedBlog.category && (
                <span className="bg-Gray text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {selectedBlog.category}
                </span>
              )}
              <div className="prose max-w-none">
                <p>{selectedBlog.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Blog Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-xl">{t("createNewBlog") }</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-Gray rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="p-4 md:p-6">
              <form onSubmit={handleCreateBlog}>
                {createError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {createError}
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="title">
                    {t("blogTitle") }
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-Gray rounded-md focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="content">
                    {t("blogContent")  }
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newBlog.content}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-Gray rounded-md focus:outline-none"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="category">
                    {t("blogCategory")}
                  </label>
                  <input
                    id="category"
                    name="category"
                    value={newBlog.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-Gray rounded-md focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="img">
                    {t("blogImage")}
                  </label>
                  <input
                    id="img"
                    name="img"
                    value={newBlog.img}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-Gray rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={createLoading}
                    className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-200 ease-linear flex items-center gap-2"
                  >
                    {createLoading
                      ? t("creating")  
                      : t("createBlog") }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
