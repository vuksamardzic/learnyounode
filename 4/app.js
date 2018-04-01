const fs = require('fs');
const path = require('path');
const dir_path = process.argv[2];
const file_extension = `.${process.argv[3]}`;

fs.readdir(dir_path, (err, list) => {
    if (err) {
        return console.log(err);
    }
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === file_extension) {
            console.log(list[i]);
        }
    }
});
