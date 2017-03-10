/**
 * Created by GIO on 5/3/2017.
 */

var page = require('page');


page('/' , function(ctx , next){

    var main = document.getElementById('main-container');

    main.innerHTML = '<a href="/signup">Signup</a>';

})

