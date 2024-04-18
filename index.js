import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basepath = 'c:\\Users\\HP\\Desktop\\VScode\\WEB DEV\\Resources\\24.02 CWH clear the clutter'
let files = await fs.readdir(basepath)
// console.log(files)

for (const item of files) {
    // let ext = item.split('.')[item.split('.').length - 1]
    let ext = item.split('.')[1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}