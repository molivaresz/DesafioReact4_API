import React from 'react'

const Buscador = (props) => {
    return (
    <>
        <form>
            <input className='border-2 m-2' type="text" placeholder="Buscar: name, country" onChange={(event) => props.hASearch(event.target.value.toLowerCase())} />
        </form>
    </>
    )
}

export default Buscador