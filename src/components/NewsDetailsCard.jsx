import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
      <div className="space-y-5 p-5 bg-base-100 rounded-xl shadow">
        <img
          className="w-full h-[350px] object-cover rounded"
          src={news.image_url}
          alt=""
        />
        <h2 className="text-2xl">{news.title}</h2>
        <p>{news.details}</p>
        <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>
          All news in this category
        </Link>
      </div>
    );
};

export default NewsDetailsCard;