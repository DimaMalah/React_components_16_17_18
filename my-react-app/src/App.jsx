import React from "react";
import Card from "./components/Card.js";
import Card2 from "./components/Card2.jsx";
import Definitions from "./components/Definitions.jsx";


const definition = [
	{ dt: 'one', dd: 'two', id: 1 },
	{ dt: 'another term', dd: 'another description', id: 2 },
];

function App() {
	return (<>
		<Card></Card>
		<Card2 title="card title" text="card text"></Card2>
		<Card2 title="  " text="card text"></Card2>
		<Card2 title="card title"></Card2>
		<Definitions data={definition} />
	</>
	)

}

export default App;
