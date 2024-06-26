import React from 'react'
import category_card from './category-images.json'
import Card from './Card'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { useEffect } from 'react';


const Category_Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { categoryId } = useParams();
    const category = category_card.find(card => card.title === (categoryId));
    return (
        <div>
            <Navbar />
            <div className="category_Products">
                <h1>{category.title}</h1>
                <div className='category_Products_cards'>
                    {category.products.map((card) => {
                        return (
                            <div key={card.id}>
                                <Card src={card.src} title={card.title} price={card.price} stars={card.stars} feature={card.feature} productId = {card.productId}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category_Products
