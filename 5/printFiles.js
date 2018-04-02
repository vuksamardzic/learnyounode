const fs = require('fs');
const path = require('path');

function filterFiles(list, filter) {
    return list.filter(function (file) {
        return path.extname(file) == '.' + filter;
    });
};

module.exports = function (directory, filter, callback) {

    fs.readdir(directory, function (error, list) {
        if (error) {
            return callback(error);
        }
        let filtered = filterFiles(list, filter);
        return callback(null, filtered);
    });

};