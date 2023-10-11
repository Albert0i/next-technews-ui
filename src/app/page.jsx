import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postData } from '../../data'

export default function Home() {
  return (<>
    <CategoriesList />
    
    <div>
      <Post />
    </div>
  </>)
}
