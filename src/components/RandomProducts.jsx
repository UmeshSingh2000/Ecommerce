import { useEffect, useState } from 'react';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Loader from './Loader';


const RandomProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 9;
  const [category_card, setCategory_card] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setCategory_card(Array.isArray(response.data.data) ? response.data.data : []);
        
        console.log();
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (Array.isArray(category_card) && category_card.length > 0) {
      // Only flatMap if category_card is a valid array
      const allProducts = category_card.flatMap(category => category.products || []);
      setProducts(allProducts);
      setVisibleProducts(allProducts.slice(0, itemsPerPage));
    }
  }, [category_card]);

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

  if (!category_card) {
    return (
      <div>
        
        <div><Loader/></div> {/* Loading state if the category is not found yet */}
        
      </div>
    );
  }
  return (
    <div className="random-products">
      <h1>Browse <span style={{ color: 'red', textDecoration: 'underline' }}>Products</span></h1>
      <InfiniteScroll
        dataLength={visibleProducts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader/>}
        endMessage={<p style={{ textAlign: 'center' }}>You have seen all products</p>}
      >
        <div className='container'>
          {visibleProducts.map((product, index) => (
            <Card key={index} title={product.title} src={product.src} stars={product.stars} price={product.price} feature={product.feature} productId={product.productId} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default RandomProducts;
