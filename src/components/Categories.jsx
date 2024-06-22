
import { Link } from 'react-router-dom';
import imageData from './category-images.json';

const Categories = () => {
  return (
    <div id='categories'>
      <div className="title">
        <h1>Shop by <span style={{
          color: 'red',
          textDecoration: 'underline'
        }}>Categories</span></h1>
      </div>
      <div className='container'>
        {imageData.map((img) => {
          return (
            <Link to={`/category/${img.title}`} key={img.id}>
              <div className='category-card'>
                <img src={img.src} />
                <p>{img.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
