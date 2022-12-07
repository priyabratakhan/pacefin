import React, { useState } from "react";
import axios from "axios";

const GetNews = () => {
  const [news, setNews] = useState([]);

  const newsData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c047d9c50b9946d7a2b49298a3470a28"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  };

  return (
    <>
      <button onClick={newsData}>click</button>

      <div className="container">
        <div className="row">
          {news.map((data) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    {/* <a href="#" className="btn btn-primary">
                      {data.url}
                    </a> */}
                    <img src={data.urlToImage} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetNews;
