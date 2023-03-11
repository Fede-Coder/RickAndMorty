import { connect } from "react-redux"
import { FavCardDiv, FavCardLinkDetail, FavCardDivAvatar, FavDiv } from "./StyleFavorites"

export function Favorites(props) {
    return(
        <FavDiv>
            {
               props.favorites && props.favorites.map(myFav =>
                    <FavCardDiv key={myFav.id}>
                        <FavCardLinkDetail to={`/detail/${myFav.id}`}><i className="fa-solid fa-info"></i></FavCardLinkDetail>
                        <FavCardDivAvatar>
                            <h2>{myFav.name}</h2>
                            <img src={myFav.image} alt={myFav.name} />
                        </FavCardDivAvatar>
                    </FavCardDiv>
                )
            }
        </FavDiv>
    )
}

export function mapStateToProps(state) {
    return {
        favorites: state.characters.favorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites)