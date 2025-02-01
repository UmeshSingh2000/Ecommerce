import React, { useState, useEffect } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import Loader from './Loader';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const Category_Products = () => {
  const [category_card, setCategory_card] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store selected category

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProd = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}api/products`);
        setCategory_card(response.data.data); // Set category list
      } catch (err) {
        console.log(err);
      }
    };
    fetchProd();
  }, []);

  const { categoryId } = useParams();

  // Update selectedCategory when category_card changes
  useEffect(() => {
    const category = category_card.find(card => card.title === categoryId);
    setSelectedCategory(category); // Update selected category
  }, [category_card, categoryId]); // Re-run when category_card or categoryId changes

  // Conditional rendering: Check if selectedCategory is available
  if (!selectedCategory) {
    return (
      <div>
        
        <div><Loader/></div> {/* Loading state if the category is not found yet */}
        
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="category_Products">
        <h1>{selectedCategory.title}</h1>
        <div className="category_Products_cards">
          {selectedCategory.products.map((card) => (
            <div key={card.id}>
              <Card
                src={card.src}
                title={card.title}
                price={card.price}
                stars={card.stars}
                feature={card.feature}
                productId={card.productId}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category_Products;
