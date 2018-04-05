export class User {
  id: number;
  username: string;
  name: string;
  age: number;

  constructor(id: number, username: string, name: string, age: number) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.age = age;
  }
}
