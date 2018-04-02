const myModule = require('./printFiles');

const directory = process.argv[2];
const filter = process.argv[3];

let callback = function (error, filtered) {
    if (error) {
        console.log('error');
        console.log(error);
    }
    for (let index in filtered) {
        console.log(filtered[index]);
    }
};

myModule(directory, filter, callback);