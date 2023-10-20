const Card = ({ content, title }) => {
    return (
        <div className="flex flex-col justify-between bg-red-800 shadow-lg shadow-gray-700 rounded-lg w-full m-1 p-5">
            <h2 className="text-3xl font-bold text-left">
                {title}
            </h2>
            <div className="flex flex-col justify-center m-4 text-2xl text-center">
                {content}
            </div>
        </div>
    );
}

export default Card;