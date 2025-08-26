
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../component";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.UserId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.FeaturedImg || post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
  <Container>
    <div className="w-full max-w-3xl mx-auto"> {/* keeps content centered */}
      
      {/* Image section */}
      <div className="relative mb-6">
        {(post.FeaturedImg || post.featuredImage) ? (
          <img
            src={appwriteService.getFilePreview(post.FeaturedImg || post.featuredImage)}
            alt={post.title}
            className="w-full max-h-[500px] object-cover rounded-xl shadow"
          />
        ) : (
          <div className="w-full h-60 rounded-xl bg-gray-300 flex items-center justify-center text-gray-600">
            No Image
          </div>
        )}

        {/* Edit/Delete buttons for author */}
        {isAuthor && (
          <div className="absolute right-4 top-4 flex gap-2">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500">Edit</Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* Content */}
      <div className="prose max-w-none">{parse(post.content)}</div>
    </div>
  </Container>
</div>

    ) : null;
}