import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const CharacterPopularity = () => {

    const data = [
        { Character: 'Iron Man', Releases: 100 },
        { Character: 'Spider-Man', Releases: 150 },
        { Character: 'Thor', Releases: 80 },
    ];

    return (
        <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Character" />
            <YAxis dataKey="Releases"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Releases" fill="#8884d8" />
        </BarChart>
    );
}



export default CharacterPopularity;