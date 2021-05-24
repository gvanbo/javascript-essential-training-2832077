import Book from "./Book.js";

const b1 = new Book("The Hobbit", "J.R.R. Tolkien", 332, "Adventure");

const b2 = new Book(
  "The Lion, The Witch, and the Wardrobe",
  "C.S. Lewis",
  225,
  "Children's Adventure"
);

const b3 = new Book("C#", "Joel Murach", 780, "Text Book, Computer Science");

console.log("Testing");
console.log(b1.author);
