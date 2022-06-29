const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');
const Square = require('../views/Square');


const router = express.Router();
const Die = require('../db/models/die');

/* GET home page. */
router.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', (req, res) => {
  const die = new Die(Number(req.body.sides));

  const home = React.createElement(Home, {
    ...req.app.locals,
    die,
    roll: die.roll(),
  });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/rolls/number', (req, res) => {
  const die = new Die(Number(req.body.numberDie));
  const result = die.roll();
  const dielist = React.createElement(Square, { die, roll: result });
  const html = ReactDOMServer.renderToStaticMarkup(dielist);
  res.write('<!doctype html>');
  res.end(html);
  // console.log(req.body);
});

module.exports = router;
