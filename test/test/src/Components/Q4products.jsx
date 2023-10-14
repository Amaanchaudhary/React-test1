import { useEffect, useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'

const Q4products = () => {

    const [products , setProducts] = useState([]);  

    useEffect(() => {
        toast.success('page rendered')
        try{
            async function getProducts(){
                const {data} = await axios.get('https://fakestoreapi.com/products')
                console.log(data , "data here")
                setProducts(data);
            }
        }
        catch(error){
            toast.error(error);
        }
    },[])

    return(
        <div>
            
        </div>
    )
} 

export default Q4products;