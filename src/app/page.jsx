import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from '@../../data'

export default function Home() {
  return (<>
    <CategoriesList />
    { postsData && postsData.length > 0 ? 
      postsData.map((post) => ( <Post key={post.id} post={post} /> ) ) : 
      <div>No posts to display</div>} 
  </>)
}
