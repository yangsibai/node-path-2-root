##path-2-root

get path to project root

[![NPM](https://nodei.co/npm/p2r.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/p2r/)

###Install

    npm install p2r

*Note: you must not install this package globally!*
    
###Example

In `root/foo/bar/baz/qux/` you have a file `lib.js`, you want to `require` file `config.js` in `root` dir.

Instead:

    var lib = require('../../../../../config.js');
    
With:

    var p2r = require('p2r');
    var lib = require(p2r.path('config.js'));
    
Or:    

    var p2r = require('p2r');
    var lib = p2r.require('config.js');
