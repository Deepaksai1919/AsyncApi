const path = require('path');
const Generator = require('@asyncapi/generator');

const templates = {
    document: '@asyncapi/html-template',
    python: '@asyncapi/python-paho-template',
    node: '@asyncapi/nodejs-template',
    nodews: '@asyncapi/nodejs-ws-template'
};

const paths = {
    document: 'Documentation',
    python: 'Python',
    node: 'Node',
    nodews: 'Node Ws'
};

const files = [
    'Receiver',
    'Sender'
];

function generate(type){
    try{
        files.forEach((file)=>{
            const generator = new Generator(templates[type],path.resolve(__dirname,`${paths[type]}/${file}`),{
                templateParams: {
                    server: 'dev'
                }
            });
            generator.generateFromFile(`source/${file}.json`);
        });
    }catch(err){
        console.error(err);
    }finally{
        console.log('Done');
    }
}

// generate('python');
generate('node');

