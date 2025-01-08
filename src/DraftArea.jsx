import { Car } from "./car";
import { Component1 } from "./component1";

// the same is:
// const DraftArea =(prors)=>{...}
export function DraftArea(props) {
  const car = {
    company: "mazda",
    year: 2020,
    model: 3,
  };
  const car2={
    company: "mercedes",
    year: 2021,
    model: "a-class",
  };
  console.log("ido hameleh");

  car.company="honda";
  car.year++;
  car.model="accord"

  function changeModel(event){
   
    console.log("event=", event, event.target.value);
    car.model=event.target.value;
    

  }

  function changeModel2(event){
   
    console.log("event=", event, event.target.value);
    car2.model=event.target.value;
    
      };

  return (
    
    <div>
      <h1>draft area</h1>
      <Component1 name="izhar" />
      <Component1 name="ido" />
      <p>
        
        my car= {car.company}, {car.year}, {car.model}
      </p>
      <p>
        my wife car={car2.company}, {car2.year}, {car2.model}
      </p>

      <input type ="text" onChange={changeModel}/>
      <input type="text" onChange={changeModel2} />
      <Car/>
    </div>
  );

}
