import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Temcard from '../Temcard/Dexcard'
import './Dex.css'

export default function Dex() {
	const [temList, setTemList] = useState([])
	const [typesList, setTypesList] = useState([])
	const [allTems, setAllTems] = useState([])

	useEffect(() => {
		const api = async () => {
			const [temData, typesData] = await Promise.all([
				fetch('https://temtem-api.mael.tech/api/temtems', {
					method: 'GET'
				}),
				fetch('https://temtem-api.mael.tech/api/types', {
					method: 'GET'
				})
			])

			const jsonTypesData = await typesData.json()
			setTypesList(jsonTypesData)

			const jsonTemData = await temData.json()
			setTemList(jsonTemData)
			setAllTems(jsonTemData)
		}
		api()
	}, [])

	const changeHandler = (e: any) => {
		let searchStr = e.target.value.toLowerCase()
		let newList = allTems.filter((tem: any) => {
			return tem.name.toLowerCase().includes(searchStr)
		})
		setTemList(newList)
	}

	return (
		(!(temList && typesList) ? <div>'Loading...'</div> :
			<Container>
				<Navbar handler={changeHandler} />
				<div className="Dex mt-3">
					{temList.map((value: any, index: number) => {
						return (
							<Temcard
								key={index}
								temData={value}
								types={value.types.map((typeName: any) => {
									return typesList.find((type: any) => type.name == typeName)
								})}
							/>
						)
					})}
				</div>
			</Container>)
	)
}
