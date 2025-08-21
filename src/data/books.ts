export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  dateRead?: string;
  review?: string;
  cover?: string;
  genre: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Letters from Kargil: The Kargil War Through Our Soldiers' Eyes",
    author: "Diksha Dwivedi",
    rating: 4,
    dateRead: "Jul 2024",
    genre: "Military History",
  },
  {
    id: "2",
    title: "The Invisible Man",
    author: "H.G. Wells",
    rating: 3,
    dateRead: "Jun 2025",
    genre: "Science Fiction",
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4,
    dateRead: "Apr 2025",
    genre: "Classic Literature",
  },
  {
    id: "4",
    title: "Naoki Urasawa's Monster, Volume 1: Herr Dr. Tenma",
    author: "Naoki Urasawa",
    rating: 4,
    dateRead: "Jun 2025",
    genre: "Manga",
  },
  {
    id: "5",
    title: "Harry Potter Collection (Harry Potter, #1-6)",
    author: "J.K. Rowling",
    rating: 4,
    dateRead: "Jun 2020",
    genre: "Fantasy",
  },
  {
    id: "6",
    title: "Proof: The Art and Science of Certainty",
    author: "Adam Kucharski",
    rating: 5,
    dateRead: "Aug 2018",
    genre: "Mathematics",
  },
  {
    id: "7",
    title: "The Shape of Things Unseen: A New Science of Imagination",
    author: "Adam Zeman",
    rating: 3,
    dateRead: "Aug 2016",
    genre: "Science",
  },
  {
    id: "8",
    title: "Life of Pi",
    author: "Yann Martel",
    rating: 4,
    dateRead: "Dec 2021",
    genre: "Fiction",
  },
  {
    id: "9",
    title: "Area 51: An Uncensored History of America's Top Secret Military Base",
    author: "Annie Jacobsen",
    rating: 4,
    dateRead: "May 2017",
    genre: "History",
  },
  {
    id: "10",
    title: "The Pentagon's Brain: An Uncensored History of DARPA",
    author: "Annie Jacobsen",
    rating: 4,
    dateRead: "Aug 2017",
    genre: "History",
  },
  {
    id: "11",
    title: "The Wright Brothers",
    author: "David McCullough",
    rating: 4,
    dateRead: "May 2016",
    genre: "Biography",
  },
  {
    id: "12",
    title: "India Wins Freedom: The Complete Version",
    author: "Abul Kalam Azad",
    rating: 4,
    dateRead: "Apr 2019",
    genre: "History",
  },
  {
    id: "13",
    title: "BOSE OR GANDHI: Who Got India Her Freedom?",
    author: "G.D. Bakshi",
    rating: 3,
    dateRead: "Feb 2022",
    genre: "History",
  },
  {
    id: "14",
    title: "Huế 1968: A Turning Point of the American War in Vietnam",
    author: "Mark Bowden",
    rating: 4,
    dateRead: "Oct 2018",
    genre: "Military History",
  },
  {
    id: "15",
    title: "Black Snow: Curtis LeMay, the Firebombing of Tokyo",
    author: "James M. Scott",
    rating: 4,
    dateRead: "Apr 2020",
    genre: "Military History",
  },
  {
    id: "16",
    title: "She Erased Her",
    author: "Himanshu Rai",
    rating: 3,
    dateRead: "Jun 2025",
    genre: "Fiction",
  },
  {
    id: "17",
    title: "The Secret",
    author: "Rhonda Byrne",
    rating: 5,
    dateRead: "Aug 2020",
    genre: "Self-Help",
  },
  {
    id: "18",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    rating: 5,
    dateRead: "Jul 2025",
    genre: "Fantasy",
  },
  {
    id: "19",
    title: "SICP in Python",
    author: "Abelson, Sussman, and Sussman",
    rating: 3,
    dateRead: "Feb 2022",
    genre: "Programming",
  },
  {
    id: "20",
    title: "C++ Programming and Java Programming: Computer Language Guides",
    author: "Os Swift",
    rating: 4,
    dateRead: "Feb 2025",
    genre: "Programming",
  },
];

export const readingStats = {
  totalBooks: 21,
  readingInvolvement: "Actively engaging with new books and literary explorations",
  favoriteGenre: "Science",
  goodreadsProfile: "https://www.goodreads.com/user/show/191174534-aditya-singh",
};
