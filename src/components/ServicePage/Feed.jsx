import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.module.css';
import { database, value_converter } from './data';

const Feed = ({ category, searchTerm }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Combine all data from database object into a single array
    const allData = Object.keys(database).reduce((acc, key) => {
      return [...acc, ...database[key]];
    }, []);

    // Filter data based on the selected category
    let filteredData = category === 'home' ? allData : database[category];

    // Apply search filter if searchTerm exists
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.providerName.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    setData(filteredData);
  }, [category, searchTerm]);

  return (
    <div className={styles.feed}>
      {data.map((item, index) => (
        <Link key={index} to={`image/${item.categoryId}/${item.id}`} className={styles["feed-card"]}>
          <img src={item.imageUrl} alt={item.title} />
          <h2>{item.title}</h2>
          <h3>{item.providerName}</h3>
          <p>{value_converter(item.viewCount)} Views &bull; {" " + moment(item.publishedAt).fromNow()}</p>
        </Link>
      ))}
      {data.length === 0 && <p>No results found.</p>}
    </div>
  );
};

export default Feed;
