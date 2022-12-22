import './TopHeader.css'
import Dropdown from 'react-bootstrap/Dropdown';
let dataLang = ["Ruskiy","O'zbek"]
let dataCity = ["Samarqand","Toshkent"]
function BasicExample({name,data}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {data.map((item)=>{
        return <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>

      })}
       
      </Dropdown.Menu>
     
    </Dropdown>
  );
}
function TopHeader(){
  <>
  return <div className='cont'>
    <div className="left">
    <BasicExample name='Til' data={dataLang}/>
    <BasicExample name='Shahar' data={dataCity}/>
    </div>
    <div className="middle">
      <ul>
        <li>
          <a href="#">Do'konlar</a>
          </li>
          <li>
            <a href="#">Yetkazib berish</a>
          </li>
          <li>
            <a href="#">Kompaniya haqita</a>
          </li>
      </ul>

       
    </div>
    <div className='right'>
      <p>+998933352442</p>
    </div>

    <h1> </h1>
  </div>
     </>
}


export default TopHeader