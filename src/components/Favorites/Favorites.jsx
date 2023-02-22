import { connect } from "react-redux"
import { FavCardDiv, FavCardLinkDetail, FavCardDivAvatar } from "./StyleFavorites"
import { motion } from "framer-motion"

export function Favorites(props) {
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
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
        </motion.div>
    )
}

export function mapStateToProps(state) {
    return {
        favorites: state.characters.favorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites)