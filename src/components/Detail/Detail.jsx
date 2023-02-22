import { DivDetail, H1Name, DivCard, DivAvatar, DivInfo, DivStatus } from './StyleDetail'
import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCharacterDetail, getCharacterDetail } from '../../redux/actions/CharacterAction';

export function Detail(props) {
    const { detailId } = useParams();
    const {getCharacterDetail, clearCharacterDetail} = props

    React.useEffect(() => {
      getCharacterDetail(detailId)
      return () => clearCharacterDetail()
    }, [clearCharacterDetail, detailId, getCharacterDetail]);

    const getDate = (x) => {
        let date = new Date(x)
        //
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
    }
    
    return(
        <DivDetail initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
            {
                (Object.keys(props.characterDetail).length > 0 )
                ?
                <>
                    <H1Name>{props.characterDetail.name}</H1Name>
                    <DivCard>
                        <DivAvatar>
                            <DivStatus status={props.characterDetail.status} />
                            <img src={props.characterDetail.image} alt=''></img>
                        </DivAvatar>
                        <DivInfo>
                            <h1>Información</h1>
                            <div><i className="fa-regular fa-calendar"></i> <span>{getDate(props.characterDetail.created)}</span></div>
                            <div><i className="fa-regular fa-flag"></i> <span>{props.characterDetail.origin.name}</span></div>
                            <div><i className="fa-solid fa-location-dot"></i> <span>{props.characterDetail.location.name}</span></div>
                            <div><i className="fa-solid fa-person"></i> <span>{props.characterDetail.species}</span></div>
                            <div><i className="fa-solid fa-venus-mars"></i> <span>{props.characterDetail.gender}</span></div>
                        </DivInfo>
                    </DivCard>
                </>
                :
                'loading'
            }
        </DivDetail>
    )
}

export function mapStateToProps(state) {
  return {
    characterDetail: state.characters.characterDetail
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getCharacterDetail: (card) => dispatch(getCharacterDetail(card)),
    clearCharacterDetail: () => dispatch(clearCharacterDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)