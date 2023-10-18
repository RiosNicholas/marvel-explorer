import { useState, useEffect } from "react";

const List = () => {
    const [heroesList, setHeroesList] = useState([]);
    
    useEffect(() => {
        // TODO
            try {
                // API endpoint for top tracks
                const endpoint = 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50';
                
           
            } catch (error) {
                console.error('Error:', error);
            }
        };

    }, []);
    
    return (
        <>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search top tracks"
                    className="w-1/2 font-medium italic py-1 px-3 rounded-md shadow-sm shadow-gray-900/20"
                    //   onChange={(inputString) => searchItems(inputString.target.value)}
                />
            </div>
            
            <table className="my-3">
                <thead className="border border-red-950 bg-red-800 text-white">
                    <tr>
                        <th className="border-red-950 border">Image</th>
                        <th className="border border-red-950">Name</th>
                        <th className="border border-red-950">Series</th>
                    </tr>
                </thead>
                <tbody className="border border-gray-200 text-black bg-white">
                    {topTracks.map((hero, index) => (
                        <tr key={hero.id}>
                            <td className="border border-gray-200 overflow-clip">{hero.thumbnail}</td>
                            <td className="border border-gray-200 overflow-clip">{hero.name}</td>
                            <td className="border border-gray-200 overflow-clip">{hero.Series}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default List;