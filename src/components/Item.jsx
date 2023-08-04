import React from 'react'
import Arr from './Arr'
import Game from './Game'

const Item = () => {
    return (
        <>

            {

                Arr.map((x) => {
                    let { id, name, link, img , repo } = x;
                    return <Game key={id} name={name} link={link} img={img} repo = {repo} />

                })
            }
        </>
    )
}

export default Item