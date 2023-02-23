import {DivAbout} from './StyleAbout'

export default function About() {
    return(
        <DivAbout initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
            Acerca de nosostros
        </DivAbout>
    )
}