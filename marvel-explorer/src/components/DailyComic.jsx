import { useState, useEffect } from "react";
import md5 from 'md5';

const DailyComic = ({ publicKey, secretKey }) => {
    const [comics, setComics] = useState([]);
    const [dailyComic, setDailyComic] = useState(null);


    useEffect(() => {
        const fetchComics = async () => {
            try {
                const ts = '1';
                // const hash = md5(ts + secretKey + publicKey);
                const hash = '4637f3638671ce9485ecb2f0d3211bb5';
                const response = await fetch( 
                `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
                );
                const data = await response.json();
                console.log(data);

                // Check if data contains characters
                if (data && data.data && data.data.results && data.data.results.length > 0) {
                    const allComics = data.data.results;
                    setComics(allComics);

                    // Select a random character
                    const randomIndex = Math.floor(Math.random() * allComics.length);
                    setDailyComic(allComics[randomIndex]);
                }

            } catch (error) {
                console.error(error);
            }
        }
        
        fetchComics();
    }, [publicKey, secretKey]);
    return (
        <>
            {dailyComic && (
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-medium italic text-lg">
                        {dailyComic.title}
                    </h3>
                    <img
                        src={`${dailyComic.thumbnail.path}.${dailyComic.thumbnail.extension}`}
                        alt={dailyComic.name}
                        className="rounded-xl m-1 w-32"
                    />
                </div>
            )} 
        </>
    )
}
export default DailyComic;