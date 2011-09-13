## Bug in node.js require function

Just try to clone that repo and call `node index.js`

You'll see an error just like this:

    bobrik@server:~/****/node_modules/bug$ node index.js 
    Bug included! Running script
    1
    
    node.js:134
            throw e; // process.nextTick error, or 'error' event on first tick
            ^
    TypeError: Cannot call method 'createUserById' of undefined
        at Object.getAdminUser (/home/bobrik/****/node_modules/bug/Admin.js:7:29)
        at Object.run (/home/bobrik/****/node_modules/bug/Script.js:9:27)
        at Object.<anonymous> (/home/bobrik/****/node_modules/bug/index.js:5:8)
        at Module._compile (module.js:404:26)
        at Object..js (module.js:410:10)
        at Module.load (module.js:336:31)
        at Function._load (module.js:297:12)
        at Array.<anonymous> (module.js:423:10)
        at EventEmitter._tickCallback (node.js:126:26)
        
### BUT!

Open `Admin.js` and comment out line 7 and everything goes well.

I suppose this is wrong behavior.
