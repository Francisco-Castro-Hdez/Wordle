import React , { useState } from 'react'
import './Cell.css'

function Cell({row, col}) {
    const [cells, setCells] = useState(Array(6).fill(Array(5).fill('')))

    let squares = [...cells];
    console.log(squares)
    const handleClick = (row, col) => {
        squares[row][col] = 'placeHolder'
        setCells(squares);
    }
  return (
    <td className='Cell' onClick={() => handleClick(row, col)}>{cells[row][col]}</td>
  )
}

export default Cell