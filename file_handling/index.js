import { log } from 'console';
import { read } from 'fs';
import { readFile, writeFile, appendFile , mkdir} from 'fs/promises';

// Read file Content using fs module
const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
}
read_file('sample.txt');

// Create File 

const create_file = async (fileName, data) => {
    await writeFile(fileName, data);
    log('File Created Successfully');
}

// create_file('ai.py', 'Hello World');
// create_file('App.txt', 'Learning ReactJS');

// Append File
const append_file = async(fileName,content)=>{
    await appendFile(fileName,content);
    log('Data Appended Successfully');
}

// append_file('App.txt','Extra content \nHello World \tNew Tab');

// Create Directory

const create_dir = async (dirName) => {
    await mkdir(dirName, { recursive: true });
    log('Directory Created Successfully');
}

// create_dir('NewDir');
create_dir('src/assets');
create_file('src/assets/style.css','body{color:red;}');
