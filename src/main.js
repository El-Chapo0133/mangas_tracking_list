let hasher = require("./auth/hasher.js");

hasher.setSource("hello");

hasher.eat().then(hasher => {
        console.log(hasher.exportHashString().length);
});
