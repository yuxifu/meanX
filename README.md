# meanX

This project is based on [Twitter-like full-stack web service](https://github.com/yuxifu/meanX-yuxi)

This project serves as a playground for
- trying out modules, techniques, or ways of programming
- trying out business ideas
- base of a general purpose personal Web API and Web Site

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Code Generation

`yo angular-fullstack X`

### Client
- What would you like to write scripts with? `Babel`
- Would you like to use Flow types with Babel? `No`
- What would you like to write markup with? `HTML`
- What would you like to write stylesheets with? `Sass`
- What Angular router would you like to use? `uiRouter`
- Would you like to include Bootstrap? `Yes`
- Would you like to include UI Bootstrap? `Yes`

### Server
- What would you like to use for data modeling? `Mongoose (MongoDB)`
- Would you scaffold out an authentication boilerplate? `Yes`
- Would you like to include additional oAuth strategies? `Google, Facebook, Twitter`
- Would you like to use socket.io? `Yes`

### Project
- What would you like to write tests with? `Mocha + Chai + Sinon`
- What would you like to write Chai assertions with? `Expect`
