import { BookOpen, ExternalLink, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { books, readingStats } from '../../data/books';

export default function BookReads() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const hoverCardBg = theme === 'dark' ? 'hover:bg-gray-750' : 'hover:bg-gray-50';

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-500 fill-current'
            : theme === 'dark'
            ? 'text-gray-600'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="books" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${highlightColor}`}>
            📚 Book Reads & Learning Journey
          </h2>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto`}>
            Continuous learning through reading - exploring technology, programming, and personal development
          </p>
        </div>

        {/* Reading Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {readingStats.totalBooks}+
            </div>
            <div className={textColor}>Books Read</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-lg font-semibold ${highlightColor} mb-2`}>
              {readingStats.readingInvolvement}
            </div>
            <div className={textColor}></div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-lg font-semibold ${highlightColor} mb-2`}>
              {readingStats.favoriteGenre}
            </div>
            <div className={textColor}>Favorite Genre</div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {books.map((book) => (
            <div
              key={book.id}
              className={`${cardBg} ${hoverCardBg} rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className={`font-semibold text-lg ${textColor} mb-2`}>
                    {book.title}
                  </h3>
                  <p className={`${subTextColor} text-sm mb-2`}>
                    by {book.author}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(book.rating)}</div>
                    <span className={`text-sm ${subTextColor}`}>
                      {book.rating}/5
                    </span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark'
                      ? 'bg-cyan-900 text-cyan-300'
                      : 'bg-cyan-100 text-cyan-800'
                  }`}>
                    {book.genre}
                  </span>
                </div>

                {book.review && (
                  <div className="mt-auto">
                    <p className={`${textColor} text-sm italic`}>
                      "{book.review}"
                    </p>
                    {book.dateRead && (
                      <p className={`${subTextColor} text-xs mt-2`}>
                        Read: {book.dateRead}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Goodreads Profile Link */}
        <div className="text-center">
          <a
            href={readingStats.goodreadsProfile}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
              theme === 'dark'
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900'
                : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            View My Goodreads Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
