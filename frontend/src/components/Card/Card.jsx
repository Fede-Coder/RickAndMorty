import React from 'react';
import { connect } from 'react-redux';
import { addCharFavorite, delCharacter, delCharFavorite } from '../../redux/actions/CharacterAction';
import {DivCard, LinkDetail, ButtonCard, DivAvatar, DivInfo, person, gender} from './StyleCard'

export function Card(props) {
   const [isFav, setIsFav] = React.useState(false);
   const {favorites, id: idChar} = props

   const handleFavorite = () => {
      //code
      if(isFav) {
         setIsFav(false);
         props.delCharFavorite(idChar);
      } else {
         setIsFav(true);
         props.addCharFavorite(props)
      }
   }

   React.useEffect(() => {
      for (let i = 0; i < favorites.length; i++) {
         if(favorites[i].id === idChar){
            setIsFav(true);
         }
      }
   }, [favorites, idChar]);

   const handleClose = (e) => {
      props.delCharacter(Number(e.currentTarget.value))
      props.delCharFavorite(Number(e.currentTarget.value))
   }

   return (
      <DivCard initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
         <LinkDetail to={`/detail/${idChar}`}><i className="fa-solid fa-info"></i></LinkDetail>
         <div id="button">
            <ButtonCard onClick={handleClose} value={idChar}><i className="fa-solid fa-xmark"></i></ButtonCard>
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
      favorites: state.characters.favorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharFavorite: (card) => dispatch(addCharFavorite(card)),
      delCharFavorite: (id) => dispatch(delCharFavorite(id)),
      delCharacter: (id) => dispatch(delCharacter(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)