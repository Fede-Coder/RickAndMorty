import { connect } from "react-redux"
import { FavCardDiv, FavCardLinkDetail, FavCardDivAvatar } from "./StyleFavorites"

export function Favorites(props) {
    console.log(props);
    return(
        <>
            {
                props.myFavorites.map(myFav =>
                    <FavCardDiv>
                        <FavCardLinkDetail to={`/detail/${myFav.id}`}><i className="fa-solid fa-info"></i></FavCardLinkDetail>
                        <FavCardDivAvatar>
                            <h2>{myFav.name}</h2>
                            <img src={myFav.image} alt={myFav.name} />
                        </FavCardDivAvatar>
                    </FavCardDiv>
                )
            }
        </>
    )
}

export function mapStateToProps(state) {
    return {
       myFavorites: state.myFavorites,
    }
 }

 export default connect(mapStateToProps, null)(Favorites)