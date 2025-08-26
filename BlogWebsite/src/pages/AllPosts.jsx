import { useState, useEffect } from 'react'
import { Container, PostCard } from '../component'
import appwriteService from '../appwrite/config'

function AllPosts() {
  const [posts, setPosts] = useState(null) // start with null

  useEffect(() => {
    appwriteService.getPosts().then((result) => {
      if (result && result.documents) {
        setPosts(result.documents)
      } else {
        setPosts([]) // make sure it's always an array
      }
    })
  }, [])

  if (!posts) {
    return (
      <Container>
        <h1 className="text-2xl font-bold">Loading...</h1>
      </Container>
    )
  }

  if (posts.length === 0) {
    return (
      <Container>
        <h1 className="text-2xl font-bold">No posts found</h1>
      </Container>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
