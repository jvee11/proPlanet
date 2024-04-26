import React, { useEffect, useState } from 'react'
import './article.css'

function Articles() {
    
    const [artilces,setArticles] = useState([]);

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=climate&apiKey=644f48c7229b40a294ebc99aaef5dac6')
        .then((res)=> res.json())
        .then((res)=>{
            console.log(res.articles[0].urlToImage)
            setArticles(res.articles)
        })
    },[])
  return (
    <div className='news-container'>

      {artilces.map((article,index)=>(
        index < 5 ?
        <div key={article.title} className='newsItem'>
            <div className='newsTitle'><a href={article.url}> Title : {article.title}</a></div>
            <p>{article.description} </p>
            <img src= {article.urlToImage} />

        </div>
        : null
      ))}

    </div>
  )
}

export default Articles
