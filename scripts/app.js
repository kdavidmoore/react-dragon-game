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

var Status = React.createClass({
	render: function() {
		return (
			<div>
				{ this.props.data ? null : <h4>You fought valiantly but were burnt to a crisp.</h4> }
				{ this.props.data ? <h4>You slew the dragon and lived to tell the tale!</h4> : null }
			</div>
		)
	}
})

var Game = React.createClass({
	getInitialState: function() {
		return { data: [], alive: true };
	},
	rollDice: function() {
		let randIntOne = 1 + Math.floor(Math.random() * 6);
		let randImgOne = "images/dice/0" + randIntOne + ".gif";
		let randIntTwo = 1 + Math.floor(Math.random() * 6);
		let randImgTwo = "images/dice/0" + randIntTwo + ".gif";
		let randomDie = [randImgOne, randImgTwo];
		let score = randIntOne + randIntTwo;
		let alive = true;
		if (score < 9) {
				alive = false;
		}
		this.setState({ data: randomDie, alive: alive });
	},
	render: function() {
		return (
			<div>
				<Dragon />
				<div className="dieWrapper">
					<Die data={this.state.data[0]} />
					<Die data={this.state.data[1]} />
				</div>
				<button onClick={this.rollDice}>Roll Dice</button>
				<Status data={this.state.alive} />
			</div>
		);
	}
});

ReactDOM.render(
	<Game />,
	document.getElementById('game')
);
