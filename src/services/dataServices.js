import axios from "axios"

const baseUrl = 'https://dummyjson.com/products'

export default {
    async getAll () {
        const result = await axios.get(baseUrl)

        return result;
    }
}