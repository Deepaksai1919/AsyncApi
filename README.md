# AsyncApi
 Test with Async Api
## Installation

Use the package manager [npm](https://nodejs.org/en/) to install.

```bash
npm install
```

## Usage
place the asyncapi code without file extension in source folder
and edit the file names in [generate.js](https://github.com/Deepaksai1919/AsyncApi/blob/master/generate.js) file.

```node
const files = [
    'Receiver',
    'Sender'
];
```
Edit the type of output required.
```node
generate('document'); /*for generating document*/
```
Valid types are given as below:

document, python, node, nodews

```bash
npm run test
```

## Note
If you are using .yaml file instead of .json, change the extension in [generate.js](https://github.com/Deepaksai1919/AsyncApi/blob/master/generate.js)
```node
generator.generateFromFile(`source/${file}.json`);
```
change .json to .yaml for yaml files.

For node/nodews, server param has to be added to the asyncApi source.

## Further
Find the async Api document at their [github page](https://github.com/asyncapi) where you can find other templates for use.
