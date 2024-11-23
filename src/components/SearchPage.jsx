import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import Loader from './Loader'

const SearchPage = () => {
    const { query } = useParams()
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0);
        const fetchProd = async () => {
            setLoading(true)
            try {
                const response = await axios('http://localhost:3000/api/products')
                const allProduct = response.data.data.flatMap((cat) => cat.products)
                // console.log(response.data.data);
                const findProdByName = allProduct.filter((prod) => prod.title.toLowerCase().includes(query.toLocaleLowerCase()))
                //search by product name
                if(findProdByName.length===0){
                    const findProdByCategory = response.data.data.filter((prod)=>prod.title.toLowerCase().includes(query.toLowerCase()))
                    return setSearchResult(findProdByCategory.flatMap((prod)=>prod.products))
                }
                setSearchResult(findProdByName);
            }
            catch (e) {
                console.log(e);
            }
            finally{
                setLoading(false)
            }
        }
        fetchProd();
    }, [query])
    if(loading) return <Loader/>
    return (
        <div>
            <Navbar />
            <div className="category_Products">
                <h1 style={{fontSize:'1.7rem'}}>Search Result for <span style={{color:"red",textDecoration:'underline'}}>{query.toUpperCase()}</span></h1>
                <div className="category_Products_cards">
                    {searchResult.map((card,index) => (
                        <div key={index}>
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
            <Footer/>
        </div>
    )
}

export default SearchPage
