import React from 'react';
import {render} from 'react-dom';

let a = 10;

console.log(a);

a += 10;

console.log(a);

class Hello extends React.Component {
	render () {
		return (
			<h1>
				<span>1111</span>
			</h1>
			
		);
	}
}

render(<Hello />, document.querySelector('#container'));


/*var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);*/