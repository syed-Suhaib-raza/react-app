import { useState, useEffect } from 'react'

function lutil(url){
    const [data, setData] = useState([])
    async function ufe() {
        const d =  fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(data => {
            return data.json()
        }).then(text => {
            setData(text)
        })
    }

    useEffect(() =>{
        ufe();
    }, [])

    return [data];

}

export {lutil};