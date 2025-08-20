import axios from "axios"

export class CategoryService{
    apiUrl =  `{process.env.REACT_APP_API_GATEWAY}/api/movie/categories/`

    getall() {
        return axios.get(this.apiUrl + "getall")
    }
}
