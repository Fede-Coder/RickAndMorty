import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, delFavorite } from '../../redux/actions/actions'
import {DivCard, LinkDetail, ButtonCard, DivAvatar, DivInfo, person, gender} from './StyleCard'

export function Card(props) {
   const [isFav, setIsFav] = React.useState(false);
   const {myFavorites} = props

   const handleFavorite = () => {
      //code
      if(isFav) {
         setIsFav(false);
         props.delFavorite(props.id);
      } else {
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   React.useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         if(myFavorites[i].id === props.id){
            setIsFav(true);
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   const handleClose = (e) => {
      props.onClose(e)
      props.delFavorite(Number(e.currentTarget.value))
   }

   return (
      <DivCard>
         <LinkDetail to={`/detail/${props.id}`}><i className="fa-solid fa-info"></i></LinkDetail>
         <div id="button">
            <ButtonCard onClick={handleClose} value={props.id}><i className="fa-solid fa-xmark"></i></ButtonCard>
         </div>
         <DivAvatar>
            <h2>{props.name}</h2>
            <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
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

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: (card) => dispatch(addFavorite(card)),
      delFavorite: (id) => dispatch(delFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)