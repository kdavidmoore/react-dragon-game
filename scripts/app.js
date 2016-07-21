var ActionImage = React.createClass({
	render: function() {
		return (
			<div className="actionWrapper">
				<img className="actionImg" src={this.props.imgSrc} />
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
				{ this.props.data == "virgin" ? <h5>You have encountered a dragon. Roll the dice to continue.</h5> : null }
				{ this.props.data == "dead" ? <h5>You fought valiantly but were burnt to a crisp.</h5> : null }
				{ this.props.data == "alive" ? <h5>You slew the dragon and lived to tell the tale!</h5> : null }
			</div>
		);
	}
})

var Game = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			yourHealth: "virgin",
			imgSrc: "images/dragon.jpg"
		};
	},
	rollDice: function() {
		let randIntOne = 1 + Math.floor(Math.random() * 6);
		let randImgOne = "images/dice/0" + randIntOne + ".gif";
		let randIntTwo = 1 + Math.floor(Math.random() * 6);
		let randImgTwo = "images/dice/0" + randIntTwo + ".gif";
		let randomDie = [randImgOne, randImgTwo];
		let score = randIntOne + randIntTwo;
		let yourHealth = "";
		let imageToShow = "";
		if (score < 9) {
			yourHealth = "dead";
			imageToShow = "images/checkmate.jpg";
		} else {
			yourHealth = "alive";
			imageToShow = "images/victory.jpg";
		}
		this.setState({
			data: randomDie,
			yourHealth: yourHealth,
			imgSrc: imageToShow
		});
	},
	render: function() {
		return (
			<div className="row">
				<div className="three columns filler"></div>
				<div className="six columns gameWrapper">
					<ActionImage imgSrc={this.state.imgSrc} />
					<div className="dieWrapper">
						<Die data={this.state.data[0]} />
						<Die data={this.state.data[1]} />
					</div>
					<button onClick={this.rollDice}>Roll Dice</button>
					<Status data={this.state.yourHealth} />
				</div>
				<div className="three columns filler"></div>
			</div>
		);
	}
});

ReactDOM.render(
	<Game />,
	document.getElementById('game')
);
