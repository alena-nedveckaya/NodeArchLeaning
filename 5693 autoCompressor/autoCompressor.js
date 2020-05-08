const zlib = require('zlib');
const fs = require('fs');
const fsp = fs.promises;
const {pipeline} = require('stream');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const unzippedFiles = [] ;

rl.question('Введите полный адрес папки: ', async address => {

    await gzipFiles(address);

});


const {promisify} = require('util');
const pipe = promisify(pipeline);
const queue = [];
let free = true;
async function do_gzip(input, output) {


    if (free) {
        free = false;
        console.log(`формируется gzip для файла ${input} `)
        const gzip = zlib.createGzip();
        const source = fs.createReadStream(input);
        const destination = fs.createWriteStream(output);
        await pipe(source, gzip, destination);
        free = true;
        console.log(`сформировался gzip для файла ${input} `);
        if (queue.length){
            do_gzip(queue[0][0], queue[0][1]);
            queue.pop()
        }
    }
    else {
        queue.push([input, output])
    }
}



async function gzipFiles(dirName, parent) {

    console.log( 'сканируется папка -', dirName);
    const filePath = path.resolve(parent, dirName);
    const statFile = await fsp.stat(filePath);
    if (statFile.isFile()) {
        const baseName = path.basename(filePath);
        try {
            await fsp.access(path.resolve(parent, `${baseName}.gz`));
            console.log( `gzip для файла ${baseName} есть`);
            const statZipFile = await fsp.stat((path.resolve(parent, `${baseName}.gz`)));
            const dateFormationZipFile = statZipFile.birthtimeMs;
            const dateFormationFile = statFile.birthtimeMs;

            if (dateFormationFile > dateFormationZipFile) {
                console.log( `gzip для файла ${baseName} устарел`);
                unzippedFiles.push([filePath, path.resolve(parent, `${baseName}.gz`)]);
                await do_gzip(filePath, path.resolve(parent, `${baseName}.gz`))
                    .catch((err) => {
                        console.error('An error occurred:', err);
                        process.exitCode = 1;
                    });
            }
        } catch {
            console.log( `gzip для файла ${baseName} нет`);
            unzippedFiles.push([filePath, path.resolve(parent, `${baseName}.gz`)])
            await do_gzip(filePath, path.resolve(parent, `${baseName}.gz`))
                .catch((err) => {
                    console.error('An error occurred:', err);
                    process.exitCode = 1;
                });
        }
    } else {
        const files = await fsp.readdir(filePath);
        files.filter(file => {
            const extName = path.extname(file);
            return extName !== '.gz'
        }).forEach( file => gzipFiles(file, filePath))
    }
}



