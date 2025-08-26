import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../component'

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    appwriteService.getPosts().then((result) => {
      if (result && result.documents) {
        setPosts(result.documents);
      } else {
        setPosts([]); 
      }
    });
  }, []);

  if (!posts) {
    return (
      <Container>
        <h1 className="text-2xl font-bold text-center py-10">Loading...</h1>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container>
        <h1 className="text-2xl font-bold text-center py-10">Login to read posts</h1>
      </Container>
    );
  }

  return (
    <Container>
      {/* Grid layout removes excess margins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </Container>
  );
}

export default Home
