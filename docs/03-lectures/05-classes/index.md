# L05 Classes

## Overview

JavaScript classes are a way of defining object-oriented programming (OOP) constructs in JavaScript. Classes provide a way to define blueprints for objects, which encapsulate data and functionality into a single entity.

### Syntax

The syntax for creating a class in JavaScript is as follows:

```javascript
class ClassName {
  constructor() {
    // constructor code
  }

  method1() {
    // method1 code
  }

  method2() {
    // method2 code
  }
}
```

The `class` keyword is used to declare a new class, followed by the name of the class (`ClassName` in this case). The class body is contained within curly braces, which includes a constructor and any number of methods.

The `constructor` method is a special method that is called when an instance of the class is created. It is used to set up any initial state that the object needs.

## Examples

Here are some examples of JavaScript classes:

### Example 1: Animal

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log('Hello, my name is ' + this.name);
  }

  getAge() {
    return this.age;
  }
}

const cat = new Animal('Fluffy', 2);
cat.speak(); // output: "Hello, my name is Fluffy"
console.log(cat.getAge()); // output: 2
```

In this example, we define a class `Animal` that has a constructor that takes a `name` and `age` argument. The class also has two methods, `speak` and `getAge`. We then create an instance of the `Animal` class called `cat` and call its `speak` and `getAge` methods.

### Example 2: Person

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }

  getAge() {
    return this.age;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const alice = new Employee('Alice', 30, 50000);
alice.sayHello(); // output: "Hello, my name is Alice"
console.log(alice.getAge()); // output: 30
console.log(alice.getSalary()); // output: 50000
```

In this example, we define a class `Person` that has a constructor that takes a `name` and `age` argument, and two methods, `sayHello` and `getAge`. We then define a subclass `Employee` that extends the `Person` class and has a constructor that takes a `name`, `age`, and `salary` argument, and a `getSalary` method. We create an instance of the `Employee` class called `alice` and call its `sayHello`, `getAge`, and `getSalary` methods.

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./05-classes.pptx').default} />

## Code Examples

- [examples/05-classes](https://github.com/umass-cs-326/examples/tree/main/05-classes)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Dynamic Imports](https://javascript.info/modules-dynamic-imports)
- [JavaScript Modules with Import/Export Syntax (ES6)](https://youtu.be/s9kNndJLOjg) (video)
- [JavaScript Classes #1: The Basics](https://youtu.be/wik23D_gyCo) (video)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.

