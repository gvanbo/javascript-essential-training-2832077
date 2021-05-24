// Create a Book Class

class Book {
  constructor(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
  }

  addPages(num) {
    this.pages += num;
  }
}
console.log("from Book");
export default Book;
