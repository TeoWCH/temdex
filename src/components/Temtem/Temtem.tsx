import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../Temcard/Dexcard.css';
import './../Temcard/gradients.css';
import './Temtem.css';

const apiURL = 'https://temtem-api.mael.tech';
const getTypeIcon = (type) => `${apiURL}/images/icons/types/${type}.png`;

export default function Temtem() {
    const { id } = useParams()
    const [temInfo, setTemInfo] = useState({})

    useEffect(() => {
        const api = async () => {
            const temData = await fetch(`${apiURL}/api/temtems/${id}`)
            const temdataJson = await temData.json()
            setTemInfo(temdataJson)
        }
        api()
    }, [])

    return (
        (temInfo.name === undefined ? 'Loading' :
            <div className="Temtem">
                <div
                className={'Temcard ' + temInfo.types.join('-').toLowerCase()}
                >
                    <div className="types-bar">
                        {temInfo.types.map((type: any, index: number) => {
                            console.log(type)
                            return (
                                <img key={index} src={getTypeIcon(type)} />
                            )
                        })}
                    </div>
                    <div className="tem-info">
                        <img src={apiURL + temInfo.icon} />
                        <div className="name">{temInfo.name}</div>
                        <div className="id">{temInfo.number}</div>
                    </div>
                </div>
            </div>
        )
    )
}
