import React from 'react';

class Card2 extends React.Component {
	render() {
		return (<div className='card'>
			<h1 className='card-title'>{this.props.title}</h1>
			<p className='card-text'>{this.props.text}</p>
		</div>

		)

	}
}

Card2.defaultProps = {
	title: null,
	text: null
}

export default Card2