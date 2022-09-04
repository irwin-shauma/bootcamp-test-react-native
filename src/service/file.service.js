import { postApi } from "../common/api"
import { BASE_URL } from "../constants/constant";

const postFile = (data) => {
    return postApi(`${BASE_URL}/files`, data)
}

export {
    postFile
}