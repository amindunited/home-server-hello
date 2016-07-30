'use strict';
//import express from 'express';
var express = require('express');
var http  = require('http');
var path = require('path');
var fs  = require('fs');
//var ncp  = require('ncp');
//var glob  = require('glob');

class Server {

  constructor () {

    let app = express();

    app.set('port', 80);

    app.use(express.static(path.join(__dirname, './dist')));

    http.createServer(app).listen(app.get('port'), function () {
      console.log('Express server listening on port ' + app.get('port'));
    });

  }

}

//export default new Server();
module.exports = new Server();