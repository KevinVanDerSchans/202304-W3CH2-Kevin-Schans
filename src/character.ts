export class Character {
  series = 'Game of Thrones';

  name;
  family;
  age;
  alive;
  message;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
    this.message = '';
  }
}
