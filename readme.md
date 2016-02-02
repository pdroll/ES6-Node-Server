# ES6 Node Server Boilerplate

Easily write your [Express](http://expressjs.com/) Node application in the [ES2015 syntax](https://babeljs.io/docs/learn-es2015/). Ideal for writing API's.

Uses [Babel](https://babeljs.io/) to compile your code, so you have access to the full ES2015 spec.

## Run Locally


```
npm start
```

Speeds up development by using [Nodemon](http://nodemon.io/) to restart the application when a file is changed.

## Run in Production

Compile your ES2015 to ES5 by running:

```
npm run compile
```

Then you can run the compiled version by running:


```
node compiled_server.js
```

## Run in Production with High Availablity

If you want to ensure your application stays online, even if your script encounters an error, [PM2](http://pm2.keymetrics.io/) has your back.

Ensure PM2 is installed on your machine:

```
npm install pm2 -g
```

Then to compile your ES2015 code to straight ES5 code and serve the compiled version with PM2, you can run:

```
npm run startProd
```



