import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({name,img,title,price}) {
  return (
    <Card style={{ width: '24rem',height:300,textAlign: 'center'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img width={160} height='160'  src={img} alt="" />
        <Card.Text>

         {name} 
      
        </Card.Text>
        <span  style={{color: "black", fontWeight:"900"}}>{price}</span>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;