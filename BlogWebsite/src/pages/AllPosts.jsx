import { useState, useEffect } from "react"
import { Container, PostCard } from "../component"
import appwriteService from "../appwrite/config"

function AllPosts() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    appwriteService.getPosts()
      .then((result) => {
        if (result && result.documents) {
          setPosts(result.documents)
        } else {
          setPosts([])
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err)
        setError("Failed to load posts")
        setPosts([])
      })
  }, [])

  if (!posts) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <h1 className="text-xl font-semibold text-gray-600 animate-pulse">
            Loading...
          </h1>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <h1 className="text-xl font-semibold text-red-500">
            {error}
          </h1>
        </div>
      </Container>
    )
  }

  if (posts.length === 0) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <h1 className="text-xl font-semibold text-gray-600">
            No posts found
          </h1>
        </div>
      </Container>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
