import React from 'react'

//burda şimdi pictureları listeleyecğiz, props kullanacağız
function Painting({painting}) {
    //console.log(painting)
    //destructing
    const {id, title, description, price, link, image} = painting;
    /*
    bunu yapmazsak şöyle yapardık
    painting.id,
    painting.title,
    painting.description,
    ...
    */
  return (
    <div className = 'painting gaegu-regular'>
      <div>
        <img src={image} alt="not available" />
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h2>{price}</h2>
        <a href={link}> To buy</a>
       </div>
      
    </div>
  )
}

export default Painting
