import React, { useState, useEffect } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookCard from "src/components/BookCard.js";
import Header from ".src/components/Header.js";
import SearchAndSort from "src/components/SearchAndSort.js";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [sortOption, setSortOption] = useState("title-asc");

  useEffect(() => {
    // Load books data when component mounts
    setBooks(initialBooks);
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  // Filter books based on search
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.genres.some(genre => genre.toLowerCase().includes(search.toLowerCase()))
  );

  // Sort books based on selected option
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOption) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "rating-desc":
        return b.rating - a.rating;
      case "rating-asc":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SearchAndSort 
        search={search} 
        setSearch={setSearch} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />

      <div className="books-grid">
        {sortedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;