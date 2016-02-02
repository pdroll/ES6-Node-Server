import Express from 'express';

let app = Express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send(`
  		<h1>Hello World</h1>
  		<h2>from a Node.js Server written in ECMAScript 6!</h2>
  		<p>Start editing <code>server.js</code> to make your app come to life!</p>`);
});

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
