import React from 'react'

function Keyboard({word}) {
    const keyStroke = (word, data) =>{
        setWord(word.concat({this.data-key}))
    }
  return (
    <table className='Keyboard'>
            <tbody>
                <tr class='Keyboard'>
                    <button data-key='Q'>Q</button>
                    <button data-key='W'>W</button>
                    <button data-key='E'>E</button>
                    <button data-key='R'>R</button>
                    <button data-key='T'>T</button>
                    <button data-key='Y'>Y</button>
                    <button data-key='U'>U</button>
                    <button data-key='I'>I</button>
                    <button data-key='O'>O</button>
                    <button data-key='P'>P</button>
                </tr>
                <tr class='Keyboard'>
                    <button data-key='A'>A</button>
                    <button data-key='S'>S</button>
                    <button data-key='D'>D</button>
                    <button data-key='F'>F</button>
                    <button data-key='G'>G</button>
                    <button data-key='H'>H</button>
                    <button data-key='J'>J</button>
                    <button data-key='K'>K</button>
                    <button data-key='L'>L</button>
                </tr>
                <tr class='Keyboard'>
                    <button>ENTER</button>
                    <button data-key='Z'>Z</button>
                    <button data-key='X'>X</button>
                    <button data-key='C'>C</button>
                    <button data-key='V'>V</button>
                    <button data-key='B'>B</button>
                    <button data-key='N'>N</button>
                    <button data-key='M'>M</button>
                    <button>DEL</button>
                </tr>
            </tbody>
        </table>
  )
}

export default Keyboard