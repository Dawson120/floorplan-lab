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
      <Bathroom />
    </div>
    </>
  )
}

export default FloorPlan;