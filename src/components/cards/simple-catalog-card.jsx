import React from 'react'

const SimpleCatalogCard = ({title , img}) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default SimpleCatalogCard
