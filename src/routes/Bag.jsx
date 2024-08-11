import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'

const Bag = () => {
  const item = []

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item={item}/>
          </div>
          <BagSummary/>
        </div>
      </main>
    </>
  )
}

export default Bag
