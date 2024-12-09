import { useState } from "react"

export function FollowCard ({ usuario, children }){
    /*
    const estado = useState(false)
    const isFollowing = useState[0]
    const followingChange = useState[1]
    equivalente a lo de abajo
    */
       
    const [ isFollowing, setIsFollowing ] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return ( 
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                     className='tw-followCard-avatar' 
                    alt="algo" src={`https://unavatar.io/${usuario}`}></img>
                <div className='tw-followCard-info' >
                    <strong> {usuario} </strong>
                    <span  className='tw-followCard-infoUserName'>{children}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}
