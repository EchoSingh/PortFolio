import { ExternalLink, Calendar, Clock, Tag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { blogPosts, blogStats } from '../../data/blogs';

export default function Blogs() {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-navy-700';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-navy-500';
  const highlightColor = theme === 'dark' ? 'text-cyan-400' : 'text-navy-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const hoverCardBg = theme === 'dark' ? 'hover:bg-gray-750' : 'hover:bg-gray-50';

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${highlightColor}`}>
            📝 Blogs & Writing
          </h2>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto`}>
            Sharing knowledge about C++, compilers, and programming insights across multiple Hashnode publications
          </p>
        </div>

        {/* Blog Sites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className="mb-4">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1755793820698/623fa791-735d-4cec-b8a4-f7efa7426799.jpeg?w=500&h=500&auto=compress,format&format=webp"
                alt="Pointer Hmm"
                className="w-16 h-16 mx-auto rounded-lg"
              />
            </div>
            <h3 className={`text-xl font-bold ${highlightColor} mb-2`}>
              Pointer Hmm
            </h3>
            <p className={`${textColor} text-sm mb-4`}>
              Developer-focused publication exploring C++, software engineering practices, and modern programming insights
            </p>
            <a
              href="https://programcycle.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-cyan-600 hover:text-cyan-700'
              }`}
            >
              Visit Blog <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className="mb-4">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1755799727142/85bf13e4-ddb0-40e6-bebd-98c5c57fea83.webp?w=500&h=500&auto=compress,format&format=webp"
                alt="CuriousCode"
                className="w-16 h-16 mx-auto rounded-lg"
              />
            </div>
            <h3 className={`text-xl font-bold ${highlightColor} mb-2`}>
              CuriousCode
            </h3>
            <p className={`${textColor} text-sm mb-4`}>
              Technical insights and code explorations
            </p>
            <a
              href="https://curiouscode.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-cyan-600 hover:text-cyan-700'
              }`}
            >
              Visit Blog <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-3xl font-bold ${highlightColor} mb-2`}>
              {blogStats.totalPosts}
            </div>
            <div className={textColor}>Published Posts</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-lg font-bold ${highlightColor} mb-2`}>
              C++ Focus
            </div>
            <div className={textColor}>Primary Topic</div>
          </div>
          <div className={`${cardBg} rounded-lg p-6 border text-center`}>
            <div className={`text-lg font-bold ${highlightColor} mb-2`}>
              Member Since Jun 2025
            </div>
            <div className={textColor}>Hashnode Journey</div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-6 ${highlightColor}`}>
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`${cardBg} ${hoverCardBg} rounded-lg p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  {/* Post Image */}
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-cyan-900 text-cyan-300'
                        : 'bg-cyan-100 text-cyan-800'
                    }`}>
                      Featured
                    </span>
                  </div>

                  <h4 className={`font-bold text-xl ${textColor} mb-3 line-clamp-2`}>
                    {post.title}
                  </h4>

                  <p className={`${subTextColor} text-sm mb-4 line-clamp-3`}>
                    {post.excerpt}
                  </p>

                  <div className={`flex items-center gap-4 text-xs ${subTextColor} mb-4`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishedDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-medium transition-colors ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-cyan-600 hover:text-cyan-700'
                    }`}
                  >
                    Read More <ExternalLink className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Hashnode Profile Link */}
        <div className="text-center">
          <a
            href={blogStats.hashnodeProfile}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
              theme === 'dark'
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900'
                : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
            }`}
          >
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png" alt="Hashnode" className="w-5 h-5" />
            View All Posts on Hashnode
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
