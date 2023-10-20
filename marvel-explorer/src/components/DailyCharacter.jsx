import { useState, useEffect } from "react";
import md5 from 'md5';

const DailyCharacter = ({ publicKey, secretKey }) => {
    const [characters, setCharacters] = useState([]);
    const [dailyCharacter, setDailyCharacter] = useState(null);


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

                // Check if data contains characters
                if (data && data.data && data.data.results && data.data.results.length > 0) {
                    const allCharacters = data.data.results;
                    setCharacters(allCharacters);

                    // Select a random character
                    const randomIndex = Math.floor(Math.random() * allCharacters.length);
                    setDailyCharacter(allCharacters[randomIndex]);
                }

            } catch (error) {
                console.error(error);
            }
        }
        
        fetchCharacters();
    }, [publicKey, secretKey]);
    return (
        <>
            {dailyCharacter && (
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-medium italic text-lg">
                        {dailyCharacter.name}
                    </h3>
                    <img
                        src={`${dailyCharacter.thumbnail.path}.${dailyCharacter.thumbnail.extension}`}
                        alt={dailyCharacter.name}
                        className="rounded-xl m-1"
                    />
                </div>
            )} 
        </>
    )
}
export default DailyCharacter;