import { useRef, useState } from "react";
import { postProduct } from "../api/ProductAPI";

const initstate = {
    title : '',
    content: '',
    writer: '',
    images: []
}

const ProductInput = () => {


    const fileRef = useRef();
    const [board , setBoard] = useState({...initstate})

    const handleChange = (e) => {

        board[e.target.name] = e.target.value
        setBoard({...board});

    }
    
    const handleClickSave = (e) => {

        // console.log(board)
        const formData = new FormData();
        formData.append("title" , board.title)
        formData.append("content" , board.content)
        formData.append("writer" , board.writer)

        console.log(fileRef.current)

        const arr = fileRef.current.files
        for(let file of arr){
            formData.append("files", file)
        }

        postProduct(formData)
        
    }

    const handleclickClear = (e) => {

        fileRef.current.value = '';
        setBoard({...initstate});

    }
    
    return (
        <div>
            <h1>input</h1>
            <div>
                <input type="text" name="title" value={board.title} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="content" value={board.content} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="writer" value={board.writer} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
            </div>



            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleclickClear}>Clearfiles</button>
            </div>
            
        </div>
    );
}
 
export default ProductInput;