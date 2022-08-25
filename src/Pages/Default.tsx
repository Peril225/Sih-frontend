
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'

function Default() {
	const hist = useNavigate()
	const [renerCom, setrenerCom] = useState(1)
	useEffect(() => {
		if (!localStorage.getItem("auth-token")) {
			hist("/")
		}
	}, [])

	const renderCompo = (val: number) => {
		switch (val) {
			case 1:
				return <div>wfcwedcfwe</div>
			case 2:
				return <div>wfcwedcfweawdqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
			case 3:
				return <div>wfcwekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkdcfwe</div>

			default:
				return "Kai po che"
		}
	}

	return (
		<div>

		</div>
	)
}
export default Default