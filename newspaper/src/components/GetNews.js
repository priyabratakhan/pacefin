import React, {useState} from "react";
import axios from "axios";

const GetNews = () => {

    const [news,setNews] = useState([])

    const newsData = ()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c047d9c50b9946d7a2b49298a3470a28")
        .then((res)=>{
            console.log(res)
            setNews(res.data.articles)
        })
    }

  return <>
  <button onClick={newsData}>click</button>
  </>
};

export default GetNews;
