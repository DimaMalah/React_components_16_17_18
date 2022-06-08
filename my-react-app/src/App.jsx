import React from "react";
import Progress from "./components/Progress.jsx"



const definition = [
	{ dt: 'one', dd: 'two', id: 1 },
	{ dt: 'another term', dd: 'another description', id: 2 },
];

function App() {
	return (<>
		<Progress width="80%" percentage={40} />
	</>
	)

}

export default App;
