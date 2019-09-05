import React from 'react'
import { Button } from 'semantic-ui-react'


export default function CalculatorRow(props) {
    const row = props.row
    const onClickFuntions = props.onClickFuntions

    const columns = row.map(element =>
        <Button
            key={element.value}
            name={element.name}
            value={element.value}
            icon={element.icon}
            onClick={onClickFuntions[element.name]}
            color={element.name === 'operation' ? 'yellow' : null}
            className='btt'>
            {element.display}
        </Button>)
    return (
        <Button.Group size='big' className='btnGroup'>
            {columns}
        </Button.Group>
    )
}