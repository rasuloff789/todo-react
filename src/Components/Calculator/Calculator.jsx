import { useState } from 'react'

function Calculator () {

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const isOpen = true

	return (
		<>
			<h1>{x} + {y} = {(x - 0) + (y - 0)}</h1>
			<div>
				<input onChange={e => setX(e.target.value)} type="number" />
			</div>
			<div>
				<input onChange={e => setY(e.target.value)} type="number" />
			</div>

			{isOpen && <>OK</>}
		</>
	)
}

export default Calculator
