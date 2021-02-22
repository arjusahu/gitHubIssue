import React, { useEffect, useState } from "react";
import "./Container.css";
const Container = () => {
  let [title, setTitle] = useState([]);
  let [url, setUrl] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues?page=1&per_page=30"
    )
      .then((response) => response.json())
      .then((data) => {
        title = data.map((item) => <li>{item.title}</li>);
        url = data.map((item) => item.html_url);
        setTitle(title);
        setUrl(url);
      });
  }, []);
  return (
    <div>
      <p>Github Issues</p>
      <ul>
        {url.map((item, index) => (
          <a href={item} target="_blank" key={index}>
            {title[index]}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Container;
