import { Route, Routes } from "react-router-dom"
import Navbar from "../../layout/Navbar/Navbar"
import PostPage from "../pages/PostPage"
import PostsPage from "../pages/PostsPage"

const PostsRouter = () => {
  return (
    <>
        <Navbar />
        <div className="flex justify-center">
            <Routes>
                <Route path="posts/:id" element={<PostPage />}/>
                <Route path="/" element={<PostsPage />} />
            </Routes>
        </div>
    </>
  )
}

export default PostsRouter