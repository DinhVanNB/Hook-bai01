import './App.css';
import React, {useState} from 'react';

 export const App =()=> {
  const onChange=(e)=>{
    
    setSelectedCar({car : e.target.name==="car"? e.target.value : selectedCar.car ,
        color : e.target.name==="color"? e.target.value : selectedCar.color
    });
  }

  
  let listCar = ["Mercesdes","Vinfast","Kia","Ford","Ferrari","Poscher","BMW","Tesla","Toyota","Honda","Huyndai"];
  let listColor = ["Black","Blue","Red","White","Green","Brown","Violet","Gold","Sliver"];
  let elementCar = listCar.map((car,index) => <option key={index} value={car}>{car}</option>  );
  let elementColor = listColor.map((color,index) => <option key={index} value={color}>{color}</option>  );
  let [selectedCar, setSelectedCar] = useState({car:`${listCar[0]}`,color:`${listColor[0]}`});
    return (
      <div className="container align-items-center float-start">
        <h1>Select your car</h1>
        <label>
            Select a car : &nbsp;
            <select name="car"  onChange={onChange}>
              {elementCar}
            </select>
        </label>
        <br></br>
        <br></br>
        <label>
            Select a color : &nbsp;
            <select name="color" onChange={onChange}>
             {elementColor}
            </select>
        </label>
        <br></br>
        <br></br>
        <h5>You selected a {selectedCar.color} - {selectedCar.car} </h5>
      </div>
    );
  

}

