import {DivCard, ButtonCard, DivAvatar, DivInfo, person, gender} from './StyleCard'

export default function Card(props) {
   return (
      <DivCard>
         <div id="button">
            <ButtonCard onClick={props.onClose} value={props.id}><i className="fa-solid fa-xmark"></i></ButtonCard>
         </div>
         <DivAvatar>
            <h2>{props.name}</h2>
            <img  src={props.image} alt="" />
         </DivAvatar>
         <DivInfo left species={props.species}>
            <h2><span>{person(props)}</span> {props.species}</h2>
         </DivInfo>
         <DivInfo gender={props.gender}>
            <h2><span>{gender(props)}</span> {props.gender}</h2>
         </DivInfo>
      </DivCard>
   );
}
