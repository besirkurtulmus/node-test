var whois = require('node-whois')

whois.lookup('wazza.edu.tr', function(err, data) {
    console.log(data);
})
