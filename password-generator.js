const generatepassword = require ("generate-password");
var generator = require('generate-password');

var password = generatepassword.generate({
	
    length: 15,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
});

// 'uEyMTw32v9'
console.log(password);
