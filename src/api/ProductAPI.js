import axios from "axios"



export const postProduct = async (formData) => {


        let header = {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }

        const res = await axios.post('http://localhost:8080/api/products/' , formData , header)

        return res.data

}

// async function sendDataFile(param) {
//     let axiosConfig = {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         }
//     }
//     let response = await auth.post(commonEnum.BASE_URL + '/regUser',param, axiosConfig);

//     return response.data;
// }