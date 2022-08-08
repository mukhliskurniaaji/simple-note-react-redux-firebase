import React from 'react'

export default function Button({title, onClick, loading}) {
    return (
        <>
            {loading?(<button>Loading</button>):
            (<button onClick={onClick}>{title}</button>)}
        </>
    )
  
  
}
