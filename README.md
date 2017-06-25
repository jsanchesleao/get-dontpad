#get-dontpad

It's a small tool to fetch text from dontpad.com

You simply enter a path and it returns the text.

## Installation

You can install it as a cli tool with `npm install -g get-dontpad` and use like this:

```bash
$ get-dontpad awesome-message
```

Or you can use it as a library like this:

```js
  const getDontpad = require('get-dontpad');
  getDontpad('awesome-message').then(text => console.log(text))
```

