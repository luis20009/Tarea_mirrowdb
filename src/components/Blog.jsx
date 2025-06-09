import { useState } from "react"

const Blog = ({ blog, updateBlog, deleteBlog, user }) => {
  const [info, setInfo] = useState(false)
  const [likes, setLikes] = useState(blog.likes)
  const [category, setCategory] = useState("");

const handleLikes = () => {
  console.log(category);
  const newLikes = likes + 1;
  setLikes(newLikes);
  updateBlog(blog.id, { likes: newLikes });

};

const handleDisLikes = () => {
  if (likes >= 1){
  const newLikes = likes - 1; // Dislike resta un like
  setLikes(newLikes);
    updateBlog(blog.id, { likes: newLikes });
  }else{
    setLikes(0);
    updateBlog(blog.id, { likes: 0 });
    alert("No puedes restar más likes, el mínimo es 0");
    
   } // Si likes es menor a 10, se establece en 0
};
const handlecategorie = () => {
     if (likes >= 10) {
    setCategory("Popular");
  } else if (likes >3 && likes<9) {
    setCategory("Moderate");
  } else{
    setCategory("matese");
  }
  console.log(category);
};


  const toggleView = () => setInfo(!info)

  const handleDelete = () => {
    if (window.confirm(`Delete ${blog.title} by ${blog.author}?`)) {
      deleteBlog(blog.id)
    }
  }

  const isOwner = user?.username === blog?.user?.username

  return (
    <div className="blog">
      {!info ? (
        <div className="blog-summary" data-testid="blog-summary">
          {blog.title} by {blog.author}
          <button onClick={toggleView}>view</button>
        </div>
      ) : (
        <div className="blog-summary" data-testid="blog-summary">
          <div>
            Title: {blog.title} <button onClick={toggleView}>hide</button>
          </div>
          <div>Nota: {blog.author}</div>
          <div>Publicacion: {blog.url}</div>
          <div>
            Likes: {likes} <button onClick={handleLikes}>like</button>
            <button onClick={handleDisLikes}>dislike</button>
            </div>
            <div>Categoria {category}<button onClick={handlecategorie}>categoria</button></div>
          <div>{blog.user.name}</div>
          {isOwner && <button onClick={handleDelete}>delete</button>}
          
        </div>
      )}
    </div>
  )
}

export default Blog
