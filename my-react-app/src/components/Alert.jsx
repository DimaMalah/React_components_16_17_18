import React from "react";
import cn from 'classnames';

class Alert extends React.Component {

	render() {

		const type = this.props.type;
		const text = this.props.text;


		const alertType = {
			"warning": false,
			"primary": false,
			"secondary": false,
			"danger": false,
			"info": false,
			"light": false,
			"dark": false
		}

		//-----функция проверки типа алерта--------
		const checkAlertType = (type, obj) => {
			for (let key in obj) {
				if (key === type) {
					obj[key] = true
					return obj; //--возвращает измененный обьект для CN
				}
			}
			console.warn("There's no such type of alert!")
			return obj //--возвращает НЕ измененный обьект для CN
		}


		let a = checkAlertType(type, alertType)

		const alertClass = cn("alert", `alert-${cn(a)}`)

		return (
			<div className={alertClass} role="alert">{text}</div>
		)
	}
}

export default Alert