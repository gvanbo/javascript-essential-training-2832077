/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Room {
  constructor(type, size, windows, closet) {
    (this.type = type),
      (this.size = size),
      (this.windows = windows),
      (this.closet = closet);
  }

  newType(name) {
    this.type = name;
  }
}

const livingRoom = new Room("sitting", 450, "Bay Window", false);

const bedroom = new Room("sleeping", 300, "Sliding", true);

export default Room;
