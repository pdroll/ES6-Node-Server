import Express from 'express';

const app = new Express();

/*
 * Demo ES6/ES7 Support
 */

// Object Spread Operator
const a = { a: 1, b: 2 };
const b = { b: 1, foo: 'bar' };
const c = { ...a, ...b, c: 1 };

console.log(c);

// Class Properties
class MyClass {
  myProp = 42;
  static myStaticProp = 21;

  constructor() {
    console.log(this.myProp); // Prints '42'
    console.log(MyClass.myStaticProp); // Prints '21'
  }
}
console.log(new MyClass());

/*
 * End Demo Code
 */


app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <h2>from a Node.js Server written in ECMAScript 6!</h2>
    <p>Start editing <code>server.js</code> to make your app come to life!</p>`
  );
});

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
