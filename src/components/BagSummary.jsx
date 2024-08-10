import React from 'react'

const BagSummary = () => {

  const BagSummary = {
    totatlUtem: 3,
    totalMRP: 345,
    totalDiscount: 999,
    finalPayment: 1454
  };

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS (${BagSummary.totalItem} Items)</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">Rs ${BagSummary.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount"
            >-Rs ${BagSummary.totalDiscount}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">Rs 99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">Rs ${BagSummary.finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  )
}

export default BagSummary
