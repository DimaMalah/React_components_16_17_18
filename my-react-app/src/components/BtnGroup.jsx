import React from "react";


class BtnGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			"active-left": "",
			"active-right": ""
		}

	}





	handleClick = (btn) => () => {
		if (this.state[`active-${btn}`] === "") {
			return this.setState({ [`active-${btn}`]: "active" })
		} else {
			return this.setState({ [`active-${btn}`]: "" })
		}
	}



	render() {
		let leftBtnClasses = `btn btn-secondary ${this.state["active-left"]}`
		let rightBtnClasses = `btn btn-secondary ${this.state["active-right"]}`

		return (
			<div className="btn-group" role="group" aria-label="Basic example">
				<button onClick={this.handleClick("left")} type="button" className={`${leftBtnClasses} left`}>Left</button>
				<button onClick={this.handleClick("right")} type="button" className={`${rightBtnClasses} right `}>Right</button>
			</div>
		)
	}
}

export default BtnGroup;