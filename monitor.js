const Monitor = require('ping-monitor');

const myWebsite = new Monitor(options);

myWebsite.on(event, function(response, state) {
    // Do something with the response
});