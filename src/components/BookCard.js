import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaBookOpen, FaBook, FaBookmark } from 'react-icons/fa';

const BookCard = ({ book }) => {
  // Get status badge color and icon
  const getStatusInfo = (status) => {
    switch (status) {
      case 'Read':
        return { 
          className: 'bg-status-read',
          icon: <FaBook className="mr-1" />
        };
      case 'Currently Reading':
        return { 
          className: 'bg-status-reading',
          icon: <FaBookOpen className="mr-1" />
        };
      case 'Want to Read':
        return {
          className: 'bg-status-want',
          icon: <FaBookmark className="mr-1" />
        };
      default:
        return {
          className: 'bg-gray-500',
          icon: null
        };
    }
  };

  const statusInfo = getStatusInfo(book.status);

  // Generate star ratings
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.coverImage} alt={`Cover of ${book.title}`} />
        <div className={`book-status ${statusInfo.className}`}>
          {statusInfo.icon}
          <span>{book.status}</span>
        </div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-rating flex items-center">
          {renderRating(book.rating)}
          <span className="rating-value ml-2">({book.rating})</span>
        </div>
        <div className="book-genres">
          {book.genres.map((genre, index) => (
            <span key={index} className="genre-tag">{genre}</span>
          ))}
        </div>
        <p className="book-description">{book.description}</p>
        {book.publishYear && (
          <p className="book-year text-sm text-gray-500 dark:text-gray-400">
            Published: {book.publishYear} • {book.pages} pages
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
