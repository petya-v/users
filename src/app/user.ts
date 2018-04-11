export class User {
  id?: number;
  username: string;
  name: string;
  age: number;

  constructor(username: string, name: string, age: number,id?: number) {
    this.username = username;
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
