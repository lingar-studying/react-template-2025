import { Component1 } from "./component1";

export function DraftArea(props){

const car={
    company:"mazda",year: 2020, model: 3
}




    return(<div>
      <h1>draft area</h1>
      <Component1 name="izhar"/>
      <Component1 name="ido"/>
      <p>my car= {car.company}, {car.year}, {car.model}</p>
    </div>)
}