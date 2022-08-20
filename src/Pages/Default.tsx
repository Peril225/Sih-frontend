
import Iframe from 'react-iframe'

function Default() {
	return (

		<Iframe url="http://localhost:5173/aap.html"
			width="650px"
			height="650px"
			id="myId"
			className="myClassname"
			// display="initial"
			position="relative" />

	)
}

export default Default