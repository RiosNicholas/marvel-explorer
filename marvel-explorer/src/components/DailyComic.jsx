import { useState, useEffect } from "react";
import md5 from 'md5';

const DailyComic = ({ publicKey, secretKey }) => {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const ts = '1';
                // const hash = md5(ts + secretKey + publicKey);
                const hash = '4637f3638671ce9485ecb2f0d3211bb5';
                const response = await fetch( 
                `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
                );
                const data = await response.json();
                console.log(data);

            } catch (error) {
                console.error(error);
            }
        }
        
        fetchCharacters();
    }, [publicKey, secretKey]);
    return (
        <>
        woop
        </>
    )
}
export default DailyComic;