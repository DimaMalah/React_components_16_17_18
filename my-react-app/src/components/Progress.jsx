import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from "react-bootstrap";


class Progress extends React.Component {

	render() {
		const style = {
			"width": this.props.width,
			"margin": "50px auto"
		};
		const prop = {
			"className": "progress-bar",
			"role": "progressbar",
			"aria-label": "progress",
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": "10"
		}
		return (
			<ProgressBar animated now={this.props.percentage} max={100} min={0} label={"progressbar"} style={style} />

		)


	}
}
export default Progress