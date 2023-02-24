import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticleTemplate from "./ArticleTemplate";
import { getDoc, addDoc, deleteDoc } from "../utils/requests";

export default function ArticleView() {

  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getDoc(`articles/${id}`)
      .then(data => {
        setArticle(data.article);
      })
      .catch(error => {
        navigate('/notfound', { replace: true });
      })
  }, [])

  async function addFavorite(id) {
    try {
      await addDoc(`articles/${id}/favorite`);

      const updatedArticle = {
        ...article,
        isFavorite: true,
        favoriteCount: article.favoriteCount + 1
      }
  
      setArticle(updatedArticle);
    
    } catch (error) {
      alert(error)
    }
  }

  async function cancelFavorite(id) {
    try {
      await deleteDoc(`articles/${id}/favorite`);

      const updatedArticle = {
        ...article,
        isFavorite: false,
        favoriteCount: article.favoriteCount -1
      }
  
      setArticle(updatedArticle);
    
    } catch (error) {
      alert(error)
    }
  }

  async function deleteArticle(id) {
    try {
      await deleteDoc(`articles/${id}`);
      
      navigate('/', { replace: true });
    
    } catch (error) {
      alert(error)
    }
  }

  if (!article) {
    return <p>fetching an article...</p>
  }

  return (
    <ArticleTemplate
      article={article}
      addFavorite={addFavorite}
      cancelFavorite={cancelFavorite}
      deleteArticle={deleteArticle}
    />
  )
}


