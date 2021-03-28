import React from 'react'

const Logo = ({src}) => {
    return (
       (src)? <img src={src} className="logo__main" alt="logo-main"/>:<div className="__logoInitials"><h1 className="__initials">L</h1> <h1 className="logo__text">Lambda</h1></div>
    )
}

export default Logo;