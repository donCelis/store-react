import { useState } from 'react'
import allImages from '../data'
import iconCart from '../images/icon-cart-white.svg'

const Thumbnail = ({ imgUrl }) => {
  return (
    <figure>
      <img className='img-fluid' src={imgUrl} alt='test photo' />
    </figure>
  )
}

const Gallery = () => {
  const [firstPhoto, setFirstPhoto] = useState(allImages[0].img)

  const btnStyles = {
    background: 'tomato',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }

  return (
    <section className='container'>
      <button style={btnStyles}>
        <span>
          <img src={iconCart} alt='' />
        </span>
        Comprar
      </button>
      <main className='gallery'>
        <figure className='main-photo'>
          <img className='img-fluid' src={firstPhoto} alt='photo test' />
        </figure>
        <ul className='thumbnails'>
          {allImages.map(({ thumb, img }, index) => (
            <li key={index} onClick={() => setFirstPhoto(img)}>
              <Thumbnail imgUrl={thumb} />
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}
export default Gallery
