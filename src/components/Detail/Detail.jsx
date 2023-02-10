import { DivDetail, H1Name, DivCard, DivAvatar, DivInfo, DivStatus } from './StyleDetail'
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const [character, setCharacter] = React.useState({});
    const { detailId } = useParams();

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [detailId]);

    const getDate = (x) => {
        let date = new Date(x)
        //
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
    }
    
    return(
        <DivDetail>
            {
                (Object.keys(character).length > 0 )
                ?
                <>
                    <H1Name>{character.name}</H1Name>
                    <DivCard>
                        <DivAvatar>
                            <DivStatus status={character.status} />
                            <img src={character.image} alt=''></img>
                        </DivAvatar>
                        <DivInfo>
                            <h1>Información</h1>
                            <div><i className="fa-regular fa-calendar"></i> <span>{getDate(character.created)}</span></div>
                            <div><i className="fa-regular fa-flag"></i> <span>{character.origin.name}</span></div>
                            <div><i className="fa-solid fa-location-dot"></i> <span>{character.location.name}</span></div>
                            <div><i className="fa-solid fa-person"></i> <span>{character.species}</span></div>
                            <div><i className="fa-solid fa-venus-mars"></i> <span>{character.gender}</span></div>
                        </DivInfo>
                    </DivCard>
                </>
                :
                'loading'
            }
        </DivDetail>
    )
}