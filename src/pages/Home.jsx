import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Import the CSS Module

const Home = () => {
  return (
    <div className={`${styles.content}`}>
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/52/12/40/1000_F_252124067_aCtp9ZD934RboKmjJzkXiwYDL7XkNjpn.jpg"
        alt="Delicious Food"
        className={`${styles.absolute} ${styles.relative} w-full h-full opacity-50 object-cover`}
      />
      <div className={`${styles.relative} ${styles.container} z-10 mx-auto p-6 flex flex-col items-center text-white text-center`}>
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg bg-blue-500 p-2 rounded-full">
          Welcome to Food Book !
        </h1>
        <p className="text-xl mb-6 drop-shadow-lg">Find and share your favorite recipes.</p>
        <Link
          to="/recipes"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
