import { useState } from 'react'
import allImages from '../data'

const Thumbnail = ({ imgUrl }) => {
  return (
    <figure>
      <img className='img-fluid' src={imgUrl} alt='test photo' />
    </figure>
  )
}

const Gallery = () => {
  const [firstPhoto, setFirstPhoto] = useState(allImages[0].img)
  return (
    <section className='container'>
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
