import Bathroom from "./Bathroom";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";


const FloorPlan = (props) => {
  return ( 
    <>
    <div>
      <LivingRoom />
      {props.bedrooms.map(bedroom => 
        <Bedroom key={bedroom.bedNum} bedroom={bedroom}/>
      )}
      <Kitchen />
      {props.bathrooms.map(bathroom => 
      <Bathroom key={bathroom.size} bathroom={bathroom}/>
      )}
    </div>
    </>
  )
}

export default FloorPlan;