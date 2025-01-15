import axios from 'axios'

export const getCategory = async ()=>{
    const data = await axios.get("http://localhost:1559/api/v1/products/allcategory")
    return data?.data;
}