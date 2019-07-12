import React from 'react'
import Name from './Name'

//every list item that is rendered needs to have a unique key attribute, the KEY CANNOT BE PASSED AS PROP!!
function NameList() {
  const names = [{ name: 'Petra', id: 1 }, { name: 'Marci', id: 2 }, { name: 'Ancsi', id: 3 }]
  const nameList = names.map(name => <Name key={name.id} name={name.name} />)
  return (
    <div>{nameList}</div>
  )
}

export default NameList