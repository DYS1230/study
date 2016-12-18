import './main.css';

import generateText from './sub';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = 'promise result is ' + number;
	document.body.appendChild(paragraph);
})

app.innerHTML = '<h1>HELLO WORLD</h1>';

app.appendChild(generateText());

document.body.appendChild(app);