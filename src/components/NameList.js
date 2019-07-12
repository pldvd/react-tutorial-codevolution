import React from 'react'

function NameList() {
  const names = [{name: 'Petra', id: 1}, {name:'Marci', id: 2}, {name:'Ancsi', id: 3}]
  const nameList = names.map(name => <h2 key={name.id}>{name.name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default NameList