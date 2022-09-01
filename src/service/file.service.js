import { postApi } from "../common/api"
import { BASE_URL } from "../constant/constant";

const postFile = (data) => {
    return postApi(`${BASE_URL}/files`, data)
}

export {
    postFile
}