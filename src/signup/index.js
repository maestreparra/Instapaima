/**
 * Created by GIO on 5/3/2017.
 */
var page = require('page');
var empty = require('empty');
var template = require('./template');

page('/signup' , function(ctx , next){

    var main = document.getElementById('main-container');

    empty(main).appendChild(template);

})