import React from 'react'

const Game = (props) => {
    let { id, name, link, img, repo } = props;

    return (
        <>
            <div className='flex items-center justify-center  '>

            
                <img src={img} alt="" />
                <div className="flex flex-col items-center justify-center">

                    <h3>{name}</h3>


                    <div className='flex gap-5 items-center justify-center'>

                        <button>
                            <a href={link} target='_blank'>Live</a>

                        </button>

                        <button>
                            <a href={repo} target='_blank'>Github Repo</a>


                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Game