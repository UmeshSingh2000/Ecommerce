
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
            <a href="https://www.boat-lifestyle.com/collections/true-wireless-earbuds?variant=40422740852834" key={img.id}>
              <div className='category-card'>
                <img src={img.src} />
                <p>{img.title}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
