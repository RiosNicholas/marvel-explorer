import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import md5 from "md5";
const publicKey = import.meta.env.VITE_APP_CLIENT_PUBLIC;
const privateKey = import.meta.env.VITE_APP_CLIENT_PRIVATE;

const ReleaseDetail = () => {
  const params = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const getComicDetails = async () => {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      const formattedDate = oneMonthAgo.toISOString();

      const ts = '1'; 
      const hash = md5(ts + secretKey + publicKey);

      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics?modifiedSince=${formattedDate}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.data.results.length > 0) {
            setComic(data.data.results[0]);
          } else {
            console.error("No new comics found.");
          }
        } else {
          console.error("Failed to fetch comic details");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    getComicDetails();
  }, []);

  return (
    <>
      {comic && (
        <>
          <h1>{comic.title}</h1>
          <img
            className="comic-image"
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={`Image for ${comic.title}`}
          />
          <div>{comic.description}</div>
          <br />
          <div>Published on: {comic.dates[0].date}</div>
          {/* Add more details as needed */}
        </>
      )}
    </>
  );
};

export default ReleaseDetail;
