import Bathroom from "./Bathroom";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";



const FloorPlan = (props) => {
  return ( 
    <>
    <div>
      <LivingRoom />
      {props.bedrooms.map(bedroom => 
        <Bedroom key={bedroom.bedNum} bedroom={bedroom}/>
      )}
      {props.bathrooms.map(bathroom => 
      <Bathroom key={bathroom.size} bathroom={bathroom}/>
      )}
    </div>
    </>
  )
}

export default FloorPlan;