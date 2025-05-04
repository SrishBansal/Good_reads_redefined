// Book data with information like title, author, rating, cover image, genres, and description
export const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Classic", "Fiction", "Historical"],
      description: "A powerful story of race and class set in the Depression-era South, as seen through the eyes of a young girl named Scout Finch.",
      status: "Read",
      publishYear: 1960,
      pages: 336
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      rating: 4.6,
      coverImage: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Dystopian", "Classic", "Science Fiction"],
      description: "A dystopian novel set in a totalitarian society where critical thought is suppressed under a regime of surveillance and propaganda.",
      status: "Currently Reading",
      publishYear: 1949,
      pages: 328
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.5,
      coverImage: "https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Classic", "Fiction", "Literature"],
      description: "A tragic love story set in the Jazz Age, exploring themes of wealth, class, love and the American Dream.",
      status: "Want to Read",
      publishYear: 1925,
      pages: 180
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Classic", "Romance", "Literature"],
      description: "A romantic novel about the emotional development of Elizabeth Bennet, who learns the error of making hasty judgments.",
      status: "Read",
      publishYear: 1813,
      pages: 432
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      coverImage: "https://images.unsplash.com/photo-1542086260-ddb62f405c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Fantasy", "Adventure", "Classic"],
      description: "A children's fantasy novel about the adventures of hobbit Bilbo Baggins, who is hired by the wizard Gandalf to accompany 13 dwarves to reclaim their mountain home.",
      status: "Currently Reading",
      publishYear: 1937,
      pages: 310
    },
    {
      id: 6,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Fantasy", "Young Adult", "Adventure"],
      description: "The first novel in the Harry Potter series that follows a young wizard, Harry Potter, as he discovers his magical heritage and begins his education at Hogwarts.",
      status: "Read",
      publishYear: 1997,
      pages: 223
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.3,
      coverImage: "https://images.unsplash.com/photo-1603162617013-476dfb1de047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Classic", "Coming-of-Age", "Literature"],
      description: "The story of Holden Caulfield, a teenage boy dealing with complex issues of identity, belonging, and loss in the early 1950s.",
      status: "Want to Read",
      publishYear: 1951,
      pages: 234
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      coverImage: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Fantasy", "Epic", "Adventure"],
      description: "An epic high-fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
      status: "Read",
      publishYear: 1954,
      pages: 1178
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      rating: 4.4,
      coverImage: "https://images.unsplash.com/photo-1525468568256-3b5477d5eeb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Dystopian", "Science Fiction", "Classic"],
      description: "A dystopian novel set in a futuristic World State of genetically modified citizens with an intelligence-based social hierarchy.",
      status: "Want to Read",
      publishYear: 1932,
      pages: 311
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.5,
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      genres: ["Fiction", "Adventure", "Fantasy"],
      description: "A philosophical novel about a young Andalusian shepherd who dreams of finding a worldly treasure and embarks on a journey to find it.",
      status: "Currently Reading",
      publishYear: 1988,
      pages: 197
    },
    {
      id: 11,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      rating: 4.3,
      coverImage: "https://images.unsplash.com/photo-1571824655925-0228de23f15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto
  ];