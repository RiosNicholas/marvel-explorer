import { useState, useEffect } from "react";
import md5 from 'md5';

const DailySeries = ({ publicKey, secretKey }) => {
    const [series, setSeries] = useState([]);
    const [dailySeries, setDailySeries] = useState(null);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const ts = '1';
                // const hash = md5(ts + secretKey + publicKey);
                const hash = '4637f3638671ce9485ecb2f0d3211bb5';
                const response = await fetch( 
                    `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`
                );
                const data = await response.json();

                // Check if data contains series
                if (data && data.data && data.data.results && data.data.results.length > 0) {
                    const allSeries = data.data.results;
                    setSeries(allSeries);

                    // Select a random series
                    const randomIndex = Math.floor(Math.random() * allSeries.length);
                    setDailySeries(allSeries[randomIndex]);
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchSeries();
    }, [publicKey, secretKey]);

    return (
        <>
            {dailySeries && (
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-medium italic text-lg">
                        {dailySeries.title}
                    </h3>
                    <img
                        src={`${dailySeries.thumbnail.path}.${dailySeries.thumbnail.extension}`}
                        alt={dailySeries.title}
                        className="rounded-xl m-1"
                    />
                </div>
            )} 
        </>
    )
}

export default DailySeries;