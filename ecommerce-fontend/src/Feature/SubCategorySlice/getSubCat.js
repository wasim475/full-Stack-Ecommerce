import axios from 'axios'

export const getSubCat = async ()=>{
    const subCatData = await axios.get("http://localhost:1559/api/v1/products/allsubcategory")
    return subCatData?.data
}