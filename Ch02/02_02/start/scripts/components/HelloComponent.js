var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
			<h1>Hello World</h1>
			<p>Here is some text</p>
			</div>
		)
	}
})
React.render(<HelloWorld />);