import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Temtem.css'

export default function Temtem() {
    const { id } = useParams()
    const [temInfo, setTemInfo] = useState({})

    useEffect(() => {
        const api = async () => {
            const temData = await fetch(`https://temtem-api.mael.tech/api/temtems/${id}`)
            const temdataJson = await temData.json()
            setTemInfo(temdataJson)
        }
        api()
    }, [])

    return (
        (!temInfo ? 'Loading' :
        <div className='container'>
            {temInfo.name}
            <div className="techniques">
                {/* {temInfo.techniques.map((tech) => {
                    return <div>{tech.name} - {tech.levels} - {tech.source}</div>
                })} */}
            </div>
        </div>
        )
    )
}
