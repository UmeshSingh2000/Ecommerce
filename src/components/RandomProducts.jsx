import { useEffect, useState } from 'react';
import Card from './Card'
import category_card from './category-images.json'
import InfiniteScroll from 'react-infinite-scroll-component';

const RandomProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 9;

  useEffect(() => {
    const allProducts = category_card.flatMap(category => category.products);
    setProducts(allProducts);
    setVisibleProducts(allProducts.slice(0, itemsPerPage));
  }, []);

  const fetchMoreData = () => {
    if (visibleProducts.length >= products.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setVisibleProducts(prevVisibleProducts => [
        ...prevVisibleProducts,
        ...products.slice(prevVisibleProducts.length, prevVisibleProducts.length + itemsPerPage)
      ]);
    }, 1500);
  };

  return (
    <div className="random-products">
      <h1>Browse <span style={{
        color: 'red',
        textDecoration: 'underline'
      }}>Products</span></h1>
      <InfiniteScroll
        dataLength={visibleProducts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 style={{textAlign:'center'}}>Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center' }}>You have seen all products</p>}
      >
        <div className='container'>
          {visibleProducts.map((product, index) => (
            <Card key={index} title={product.title} src={product.src} stars={product.stars} price={product.price} feature={product.feature} productId = {product.productId}/>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default RandomProducts
