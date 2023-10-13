import { categoriesData } from "../../data"

const CreatePostForm = () => {
  return (
    <div>
        <h2>Create Post</h2>
        <form>
            <input type='text' placeholder='Title' />

            <textarea placeholder='Content' />

            <div>
                <input type='text' placeholder='Place the link and click on Add' />
                <button className='flex items-center btn'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
                    </span>                
                    Add
                </button>
            </div>

            <select>
                <option value=''>Select a category</option>
                {
                    categoriesData && 
                    categoriesData.map(category => 
                        <option key={category.id} value={`${category.name}`}>{ category.name }</option>)
                }
            </select>

            <button type='submit' className='primary-btn'>Create Post</button>
        </form>
    </div>
  )
}

export default CreatePostForm
/*
   Heroicon.com
   https://heroicons.com/
*/