import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

    return (<div>{}</div>)
}
