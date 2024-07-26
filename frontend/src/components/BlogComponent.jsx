import { useNavigate } from "react-router-dom";

export const BlogComponent = ({ _id, author, title, description, date }) => {
    const navigate = useNavigate();

    const truncateDescription = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + '...';
    };

    const handleReadMore = () => {
        navigate(`/blog/${_id}`);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
            <div className="border-b p-6">
                <div className="flex items-center mb-4">
                    <div className="text-sm font-thin text-gray-500">{author}</div>
                </div>
                <div className="text-2xl font-semibold text-gray-700 mb-2">
                    {title}
                </div>
                <div className="text-md text-gray-700 font-semilight mb-4">
                    {truncateDescription(description, 100)}
                </div>
                <div className="flex items-center text-gray-500 justify-between">
                    <div className="text-md font-thin">
                        {date}
                    </div>
                    <button onClick={handleReadMore} className="text-purple-700 hover:underline">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
};
