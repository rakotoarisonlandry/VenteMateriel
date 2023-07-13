import React, { useContext } from 'react'
import DataContext from '../Context/Context'

function Stats() {
  const {stat}= useContext(DataContext)
  return (
    <div className='mx-9'>
      <div className="flex flex-col">
        <h2 className='uppercase text-[#5090D3]'>Statistiques</h2>
        <div className="">
            {stat && (
            <>
              <h5 className='opacity-70'>Quantity: {stat.quantity}</h5>
              <h5 className='opacity-70'>Abime: {stat.abime}</h5>
              <h5 className='opacity-70'>Bon: {stat.bon}</h5>
              <h5 className='opacity-70'>Mauvais: {stat.mauvais}</h5>
            </>
            )}
        </div>
      </div>
    </div>
  )
}

export default Stats
