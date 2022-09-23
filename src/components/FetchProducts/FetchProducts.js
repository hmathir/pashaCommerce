import { useEffect, useState } from "react";
import ShowProduct from '../ShowProduct/ShowProduct';

const FetchProducts = (props) => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const fetchProducts = async() => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setItems(data);
        }
        fetchProducts();
    },[]);
    
    const allItems =items.map(item => <ShowProduct product={item} key={item.id} buyNow = {props.buyNow}></ShowProduct>)

    return (
        <div className="container mx-auto ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0">
            {allItems}
            </div>

        </div>
    );
};

export default FetchProducts;