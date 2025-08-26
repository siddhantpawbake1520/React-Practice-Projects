
import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, FeaturedImg, featuredImage }) {
  const imageId = FeaturedImg || featuredImage;
 return (
  <Link to={`/post/${$id}`}>
    <div className="w-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-2xl p-4 border border-gray-200">
      {/* Image */}
      <div className="w-full mb-4">
        {imageId ? (
          <img
            src={appwriteService.getFileView(imageId)}
            alt={title}
            className="rounded-xl object-cover w-full h-48"
          />
        ) : (
          <div className="rounded-xl bg-gray-200 h-48 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
        {title}
      </h2>
    </div>
  </Link>
);
}

export default PostCard;