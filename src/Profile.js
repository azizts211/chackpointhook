import { useParams } from "react-router-dom"
import {films} from "./data"
const Profile=()=>{
    const {idfilm}=useParams()
    console.log(idfilm)
    const film=films.find((el)=>el.id===Number(idfilm))
    console.log(film,"mofyyyyyyy")
    return(
        <>
        <iframe src={film.url} style={{width:"300px",height:"250px"}}></iframe>
     
        </>
    )
}
export default Profile


