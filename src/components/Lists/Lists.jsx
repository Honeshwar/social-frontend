// import "./Lists.scss";

// export default function Lists({ title, items }) {
//   return (
//     <div className="lists">
//       <h2>{title}</h2>
//       <div className="listsGrid">
//         {(items ?? []).map((item) => (
//           <div key={item.id} className="listsCard">
//             <img src={item.img} alt={item.name} />
//             {item?.name && <p>{item.name}</p>}
//             {item?.followers && <span>{item.followers}</span>}
//             {item?.members && <span>{item.members}</span>}
//             {/* {item?.category && (
//               <span className="category">{item.category}</span>
//             )} */}
//             {/* {item?.description && (
//               <p className="description">{item.description}</p>
//             )} */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  FaHeart,
  FaCommentDots,
  FaEye,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaUsers,
  FaPlay,
  FaClock,
  FaDollarSign,
  FaShare,
  FaBookmark,
  FaStar,
  FaSearch,
  FaFilter,
  FaTh,
  FaList,
} from "react-icons/fa";
import "./Lists.scss";

const Lists = ({
  title,
  items = [],
  type = "default",
  viewMode = "grid",
  showSearch = true,
  showViewToggle = true,
  showStats = true,
  onItemClick,
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentViewMode, setCurrentViewMode] = useState(viewMode);
  const [likedItems, setLikedItems] = useState(new Set());

  // Filter items based on search term
  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true;

    const searchFields = [
      item.name,
      item.title,
      item.creator,
      item.seller,
      item.organizer,
      item.category,
      item.location,
    ].filter(Boolean);

    return searchFields.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLike = (itemId, e) => {
    e.stopPropagation();
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId);
    } else {
      newLikedItems.add(itemId);
    }
    setLikedItems(newLikedItems);
  };

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderMarketplaceCard = (item) => (
    <div
      key={item.id}
      className="lists-card marketplace-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-image">
        <img src={item.image || item.img} alt={item.title || item.name} />
        {item.category && <span className="category-tag">{item.category}</span>}
        {item.condition && (
          <span className="condition-tag">{item.condition}</span>
        )}
        <div className="card-overlay">
          <button
            className={`like-btn ${likedItems.has(item.id) ? "liked" : ""}`}
            onClick={(e) => handleLike(item.id, e)}
          >
            <FaHeart />
          </button>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>
        {item.price && <div className="price">{item.price}</div>}

        {item.seller && (
          <div className="info-item">
            <FaUser size={14} />
            <span>{item.seller}</span>
          </div>
        )}

        {item.location && (
          <div className="info-item">
            <FaMapMarkerAlt size={14} />
            <span>{item.location}</span>
          </div>
        )}

        <div className="card-stats">
          {item.likes !== undefined && (
            <div className="stat">
              <FaHeart size={14} />
              <span>{item.likes}</span>
            </div>
          )}
          {item.views !== undefined && (
            <div className="stat">
              <FaEye size={14} />
              <span>{item.views}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderWatchCard = (item) => (
    <div
      key={item.id}
      className="lists-card watch-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-image">
        <img
          src={item.thumbnail || item.image || item.img}
          alt={item.title || item.name}
        />
        <div className="play-overlay">
          <FaPlay size={24} />
        </div>
        {item.duration && <span className="duration-tag">{item.duration}</span>}
        {item.trending && <span className="trending-tag">🔥 Trending</span>}
        {item.featured && <span className="featured-tag">⭐ Featured</span>}
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>

        {item.creator && (
          <div className="info-item">
            <FaUser size={14} />
            <span>{item.creator}</span>
          </div>
        )}

        <div className="card-stats">
          {item.views && (
            <div className="stat">
              <FaEye size={14} />
              <span>{item.views}</span>
            </div>
          )}
          {item.likes !== undefined && (
            <div className="stat">
              <FaHeart size={14} />
              <span>
                {typeof item.likes === "number"
                  ? item.likes.toLocaleString()
                  : item.likes}
              </span>
            </div>
          )}
        </div>

        {item.category && (
          <span className="category-badge">{item.category}</span>
        )}
      </div>
    </div>
  );

  const renderMemoryCard = (item) => (
    <div
      key={item.id}
      className="lists-card memory-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-image">
        <img
          src={item.thumbnail || item.image || item.img}
          alt={item.title || item.name}
        />
        {item.mediaCount && item.type && (
          <span className="media-count">
            {item.mediaCount} {item.type}s
          </span>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>

        {item.date && (
          <div className="info-item">
            <FaCalendarAlt size={14} />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        )}

        {item.location && (
          <div className="info-item">
            <FaMapMarkerAlt size={14} />
            <span>{item.location}</span>
          </div>
        )}

        {item.participants && (
          <div className="info-item">
            <FaUsers size={14} />
            <span>
              {Array.isArray(item.participants)
                ? item.participants.join(", ")
                : item.participants}
            </span>
          </div>
        )}

        <div className="card-stats">
          {item.likes !== undefined && (
            <div className="stat">
              <FaHeart size={14} />
              <span>{item.likes}</span>
            </div>
          )}
          {item.comments !== undefined && (
            <div className="stat">
              <FaCommentDots size={14} />
              <span>{item.comments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderEventCard = (item) => (
    <div
      key={item.id}
      className="lists-card event-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-content">
        {item.date && (
          <div className="event-date">
            <div className="date-day">{new Date(item.date).getDate()}</div>
            <div className="date-month">
              {new Date(item.date).toLocaleDateString("en", { month: "short" })}
            </div>
          </div>
        )}

        <div className="event-info">
          <h3 className="card-title">{item.title || item.name}</h3>

          <div className="event-details">
            {item.time && (
              <div className="info-item">
                <FaClock size={14} />
                <span>{item.time}</span>
              </div>
            )}

            {item.location && (
              <div className="info-item">
                <FaMapMarkerAlt size={14} />
                <span>{item.location}</span>
              </div>
            )}

            {item.organizer && (
              <div className="info-item">
                <FaUser size={14} />
                <span>{item.organizer}</span>
              </div>
            )}

            {item.price && (
              <div className="info-item">
                <FaDollarSign size={14} />
                <span>{item.price}</span>
              </div>
            )}
          </div>

          {(item.attendees || item.interested) && (
            <div className="event-stats">
              {item.attendees && (
                <span className="attendees">{item.attendees} going</span>
              )}
              {item.interested && (
                <span className="interested">{item.interested} interested</span>
              )}
            </div>
          )}

          {item.category && (
            <span className="category-badge">{item.category}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderGamingCard = (item) => (
    <div
      key={item.id}
      className="lists-card gaming-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-image">
        <img src={item.image || item.img} alt={item.title || item.name} />
        {item.price && <span className="price-tag">{item.price}</span>}
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.title || item.name}</h3>

        {item.genre && <span className="genre-badge">{item.genre}</span>}

        <div className="game-info">
          {item.platform && (
            <div className="info-item">
              <span className="label">Platform:</span>
              <span>{item.platform}</span>
            </div>
          )}

          {item.developer && (
            <div className="info-item">
              <FaUser size={14} />
              <span>{item.developer}</span>
            </div>
          )}
        </div>

        <div className="card-stats">
          {item.rating && (
            <div className="stat">
              <FaStar size={14} />
              <span>{item.rating}</span>
            </div>
          )}
          {item.players && (
            <div className="stat">
              <FaUsers size={14} />
              <span>{item.players}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderDefaultCard = (item) => (
    <div
      key={item.id}
      className="lists-card default-card"
      onClick={() => handleItemClick(item)}
    >
      <div className="card-image">
        <img
          src={item.img || item.image || item.thumbnail}
          alt={item.name || item.title}
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.name || item.title}</h3>

        {item.description && <p className="description">{item.description}</p>}

        <div className="card-stats">
          {item.followers && (
            <div className="stat">
              <FaUsers size={14} />
              <span>{item.followers}</span>
            </div>
          )}
          {item.members && (
            <div className="stat">
              <FaUsers size={14} />
              <span>{item.members}</span>
            </div>
          )}
        </div>

        {item.category && (
          <span className="category-badge">{item.category}</span>
        )}
      </div>
    </div>
  );

  const renderCard = (item) => {
    switch (type) {
      case "marketplace":
        return renderMarketplaceCard(item);
      case "watch":
      case "videos":
        return renderWatchCard(item);
      case "memories":
        return renderMemoryCard(item);
      case "events":
        return renderEventCard(item);
      case "gaming":
        return renderGamingCard(item);
      default:
        return renderDefaultCard(item);
    }
  };

  return (
    <div className={`lists ${className}`}>
      <div className="lists-header">
        <h2 className="lists-title">{title}</h2>

        <div className="lists-controls">
          {showSearch && (
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}

          {showViewToggle && (
            <div className="view-toggle">
              <button
                className={`view-btn ${
                  currentViewMode === "grid" ? "active" : ""
                }`}
                onClick={() => setCurrentViewMode("grid")}
              >
                <FaTh />
              </button>
              <button
                className={`view-btn ${
                  currentViewMode === "list" ? "active" : ""
                }`}
                onClick={() => setCurrentViewMode("list")}
              >
                <FaList />
              </button>
            </div>
          )}
        </div>
      </div>

      {showStats && (
        <div className="lists-stats">
          <span>{filteredItems.length} items</span>
          {searchTerm && <span>for "{searchTerm}"</span>}
        </div>
      )}

      <div className={`lists-grid ${currentViewMode}-view`}>
        {filteredItems.map(renderCard)}
      </div>

      {filteredItems.length === 0 && (
        <div className="no-results">
          <h3>No items found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default Lists;
