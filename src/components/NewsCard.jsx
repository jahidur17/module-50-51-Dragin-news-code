import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegCalendarAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details } = news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden ">
      {/* Author Info */}
      <div className="flex items-center justify-between px-4 py-3  bg-base-300 ">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <CiBookmark />
          <CiShare2 />
        </button>
      </div>

      {/* Title */}
      <div className="px-4">
        <h1 className="text-lg font-bold leading-snug text-gray-900">
          {title}
        </h1>
      </div>

      {/* Thumbnail */}
      <div className="mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.length > 150 ? `${details.slice(0, 150)}...` : details}
        <Link
          to={`/news-details/${id}`}
          className="text-red-500 font-semibold cursor-pointer ml-1"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 text-sm">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
