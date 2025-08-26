import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../component'

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    appwriteService.getPosts().then((result) => {
      if (result && result.documents) {
        setPosts(result.documents);
      } else {
        setPosts([]); // ensure it's always an array
      }
    });
  }, []);

  if (!posts) {
    return (
      <Container>
        <h1 className="text-2xl font-bold">Loading...</h1>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container>
        <h1 className="text-2xl font-bold">Login to read posts</h1>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </Container>
  );
}


export default Home