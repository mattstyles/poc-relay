
[getting-started-github](https://matt.styles.github.io/getting-started-github)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/matt.styles/getting-started-github.svg)](https://david-dm.org/matt.styles/getting-started-github)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# getting-started-github

Create a github token in order to access the github api (it’ll need repo access) and add it to `.env.example`. Rename to `.env`.

The relay script also requires [watchman](https://facebook.github.io/watchman/docs/install.html) to be installed.

```sh
yarn
yarn start
yarn run relay
```

Start will begin a server ready to serve your project to browsers. The relay script will start watching your queries and converting them into something that relay can use.
