class user {
  #borrowedBooks;
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.#borrowedBooks = [];
  }
  printBorrowedBooks() {
    console.log(this.#borrowedBooks);
  }
}

let user1 = new user("Avi", "Pinto", "Haifa");
console.log(user1);
