const shortid = require('shortid');

exports.generateTicketNumber = () => {
    return shortid.generate();
}