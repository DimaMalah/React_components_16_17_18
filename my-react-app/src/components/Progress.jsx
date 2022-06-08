import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from "react-bootstrap";


class Progress extends React.Component {

	render() {
		const style = {
			"width": this.props.width,
			"margin": "50px auto"
		};
		return (
			<ProgressBar animated now={this.props.percentage} max={100} min={0} label={"progressbar"} style={style} />
		)
	}
}
export default Progress