import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, details, rating, total_view, author, image_url } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      <div className="card-body space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-gray-500">
            <FaBookmark className="cursor-pointer hover:text-primary" />
            <FaShareAlt className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug">{title}</h2>

        {/* Image */}
        <figure className="rounded-lg overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="w-full h-64 object-cover"
          />
        </figure>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-4">{details}</p>

        {/* Read more */}
        <button className="text-primary font-medium w-fit hover:underline">
          Read More
        </button>

        <div className="divider my-1"></div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
