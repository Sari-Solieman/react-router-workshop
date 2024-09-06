import axios from "axios"

const baseUrl = 'https://dummyjson.com/recipes'

export default {
    async getAll () {
        const result = await axios.get(baseUrl)

        return result;
    }
}