import Card from './Card';
import { motion } from 'framer-motion';

export default function Cards(props) {
   const { characters } = props;
   return (
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
         {
            characters.map((character, index) => 
               <Card key={index} id={character.id} name={character.name} species={character.species} gender={character.gender} image={character.image} onClose={props.onClose} />
            )
         }
      </motion.div>
   );
}