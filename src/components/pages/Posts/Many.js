// import React,{useState} from "react"
// import axios from "axios"

// function Many(){
//     const[pos,setPos] = useState({
//         title:'',
//         post:''
//     })
//     const{title,post} = pos
//     const onInpu = (e)=>{
//         setPos({...pos,[e.target.name]:e.target.value})

//     }
//     const subm = async (e)=>{
//         e.preventDefault()
//       await axios.post("http://localhost:8080/api/v1/post",pos)
//     }
//     return(
//         <div>
//             <div>
//                 <h2>Register</h2>
//             </div>
//             <div>
//                 <form onSubmit={subm}>
//                     <div>
//                     <label>name</label>
//                     <input
//                     type= 'text'
//                     name ='title'
//                     value = {title}
//                     onChange = {onInpu}
//                     />
//                     </div>
//                     <div>
//                     <label>name</label>
//                     <input
//                     type= 'text'
//                     name ='post_body'
//                     value = {post}
//                     onChange = {onInpu}
//                     />
//                     </div>
//                     <button type="submit">Post</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Many