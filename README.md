##path-2-root

get path to project root

###Install

    npm install p2r
    
###Example

In `root/foo/bar/baz/qux/` you have a file `lib.js`, you want to `require` file `config.js` in `root` dir.

Instead:

    var lib = require('../../../../../config.js');
    
With:

    var p2r = require('p2r');
    var lib = require(p2r._('config.js'));
