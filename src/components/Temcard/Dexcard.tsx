import React from 'react'
import { Link } from 'react-router-dom'
import './Dexcard.css'
import './gradients.css'

interface Props {
	temData: any
	types: any
}

function Temcard({ temData, types }:Props) {
	const { number, name, icon } = temData
	return (
		<Link
			to={`${number}`}
			className={'Temcard ' + temData.types.join('-').toLowerCase()}
		>
			<div className="types-bar">
				{types.map((type: any, index: number) => {
					return (
						<img key={index} src={'https://temtem-api.mael.tech' + type.icon} />
					)
				})}
			</div>
			<div className="tem-info">
				<img src={'https://temtem-api.mael.tech' + icon} />
				<div className="name">{name}</div>
				<div className="id">{number}</div>
			</div>
		</Link>
	)
}

export default Temcard
