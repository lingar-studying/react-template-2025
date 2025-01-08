import { Component1 } from "./component1";

export function DraftArea(props) {
  const car = {
    company: "mazda",
    year: 2020,
    model: 3,
  };
  console.log("ido hameleh");

  car.company="honda";
  car.year++;
  car.model="accord"

  function changeModel(event){
   
    console.log("event=", event, event.target.value);
    car.model=event.target.value;
    
  }
  return (
    <div>
      <h1>draft area</h1>
      <Component1 name="izhar" />
      <Component1 name="ido" />
      <p>
        my car= {car.company}, {car.year}, {car.model}
      </p>

      <input type ="text" onChange={changeModel}/>
    </div>
  );
}
