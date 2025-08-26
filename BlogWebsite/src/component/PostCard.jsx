
import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, FeaturedImg, featuredImage }) {
  const imageId = FeaturedImg || featuredImage;
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          {imageId ? (
            <img src={appwriteService.getFilePreview(imageId)} alt={title} className='rounded-xl' />
          ) : (
            <div className='rounded-xl bg-gray-300 h-32 flex items-center justify-center'>No Image</div>
          )}
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;