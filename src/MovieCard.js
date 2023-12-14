import {Card,CardBody,CardTitle,CardText,Button} from "reactstrap"
import ReactStars from 'react-stars'
const MovieCard=(props)=>{
    return(

<Card
  style={{
    width: '25rem'
  }}
>
  <img
style={{height:"300px"}}
  alt="Sample"
    src={props.el.img}
  />
  <CardBody>
    <CardTitle tag="h5">
      {props.el.name}
      
    </CardTitle>
    <ReactStars
    count={5}
  size={24}
  color2={'#ffd700'}
  value={props.el.star}
  edit={false}
  />

    <CardText>
    {props.el.discription }
    </CardText>
  </CardBody>
 


</Card>
)
}
export default MovieCard