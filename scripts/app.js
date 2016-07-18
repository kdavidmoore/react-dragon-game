var Dragon = React.createClass({
	render: function() {
		return (
			<div>
				<img src="images/dragon2.jpg" />
			</div>
		);
	}
});

var Die = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.data} />
			</div>
		);
	}
});

var Game = React.createClass({
	getInitialState: function() {
		let randIntOne = 1 + Math.floor(Math.random() * 6);
		let randImgOne = "images/dice/0" + randIntOne + ".gif";
		let randIntTwo = 1 + Math.floor(Math.random() * 6);
		let randImgTwo = "images/dice/0" + randIntTwo + ".gif";
		var randomDie = [randImgOne, randImgTwo];
		return { data: randomDie };
	},
	render: function() {
		return (
			<div>
				<Dragon />
				<div className="dieWrapper">
					<Die data={this.state.data[0]} />
					<Die data={this.state.data[1]} />
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Game />,
	document.getElementById('game')
);
