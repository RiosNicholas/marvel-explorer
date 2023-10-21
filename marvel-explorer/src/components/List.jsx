import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = ({ publicKey }) => {
    const [newReleases, setNewReleases] = useState([]);
    const [searchString, setSearchString] = useState("");
  
    useEffect(() => {
        const fetchNewReleases = async () => {
            try {
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
                const formattedDate = oneMonthAgo.toISOString();
                
                // Fetch new releases with a modified date since one month ago
                const ts = '1';
                // const hash = md5(ts + secretKey + publicKey);
                const hash = '4637f3638671ce9485ecb2f0d3211bb5';
                const response = await fetch(
                    `https://gateway.marvel.com/v1/public/comics?modifiedSince=${formattedDate}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
                    );
                const data = await response.json();

                // Check if data contains new releases
                if (data && data.data && data.data.results && data.data.results.length > 0) {
                    const allNewReleases = data.data.results;

                    // Sort new releases in descending order based on the modified date
                    allNewReleases.sort((a, b) => new Date(b.modified) - new Date(a.modified));
                    
                    setNewReleases(allNewReleases);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        fetchNewReleases();
    }, [publicKey]);

    const searchItems = (inputString) => {
        setSearchString(inputString);
    };

    const filteredReleases = newReleases.filter((release) =>
        release.title.toLowerCase().includes(searchString.toLowerCase())
    );


  return (
    <>
        <div className="flex justify-center">
            <input
                type="text"
                placeholder="Search new titles"
                className="w-1/3 font-medium italic py-1 px-3 rounded-md text-sm shadow-sm shadow-gray-900/20"
                onChange={(e) => searchItems(e.target.value)}
            />
        </div>
        <div className="max-h-72 overflow-y-auto">
            <table className="my-3 w-full ">
                <thead className="border border-gray-300 bg-gray-200 text-black sm:text-lg">
                    <tr>
                        <th className="border-gray-400 border p-2">Image</th>
                        <th className="border-gray-400 border p-2">Title</th>
                        <th className="border-gray-400 border p-2">Release Date</th>
                    </tr>
                </thead>
                <tbody className="border border-gray-200 text-black bg-white max-h-72 overflow-y-auto">
                    {filteredReleases.map((release, index) => (
                        <tr key={release.id}>
                            <td className="border border-gray-200 overflow-clip flex justify-center p-1">
                                <img
                                    src={`${release.thumbnail.path}.${release.thumbnail.extension}`}
                                    alt={release.title}
                                    className="h-14 rounded shadow-sm shadow-black flex"
                                />
                            </td>
                            <td className="border border-gray-200 overflow-clip text-sm font-medium">
                                <Link to={`/detailView/${release.id}`}>
                                    {release.title}
                                </Link>
                            </td>
                            <td className="border border-gray-200 overflow-clip text-sm italic">
                                {new Date(release.modified).toLocaleDateString(undefined, {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  );
}

export default List;
