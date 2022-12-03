import React, { useContext } from 'react'
import { Textfit } from 'react-textfit';
import { CalcContext } from './../context/CalcContext';

const Screen = () => {
  const { calc } = useContext(CalcContext)

  return (
    <Textfit mode="single" max={70} className='screen'>
      {calc.num ? calc.num : calc.res}
    </Textfit>
  )
}

export default Screen