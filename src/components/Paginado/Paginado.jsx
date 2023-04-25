import React from 'react'

export const Paginado = ({paginado,indexPage}) => {
  
  
  return (<>
    
    <button onClick={()=>paginado(indexPage-1)}>izquierda</button>
    <span>1</span>
    <button onClick={()=>paginado(indexPage+1)}>derecha</button>
    </>
  )
}
