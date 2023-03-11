import { FooterContact, FooterCopyright, FooterDiv, FooterLinks, FooterRickMorty, FooterSvg } from "./StyleFooter";
import logoRM from '../../assets/img/logo.png'

export default function Footer() {
    return(
        <>
            <FooterSvg id="visual" viewBox="0 0 1920 100" width="1920" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 34L26.7 34C53.3 34 106.7 34 160 42C213.3 50 266.7 66 320 66.5C373.3 67 426.7 52 480 52.7C533.3 53.3 586.7 69.7 640 66.3C693.3 63 746.7 40 800 40.2C853.3 40.3 906.7 63.7 960 74.3C1013.3 85 1066.7 83 1120 71.3C1173.3 59.7 1226.7 38.3 1280 33.8C1333.3 29.3 1386.7 41.7 1440 48.5C1493.3 55.3 1546.7 56.7 1600 63C1653.3 69.3 1706.7 80.7 1760 81.8C1813.3 83 1866.7 74 1893.3 69.5L1920 65L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#3e4551" strokeLinecap="round" strokeLinejoin="miter"></path></FooterSvg>
            <FooterDiv>
                <FooterRickMorty>
                    <img src={logoRM} alt="logoRM"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in arcu in magna molestie lobortis nec et dolor. Vivamus faucibus faucibus quam, vitae feugiat elit tincidunt vitae. Donec elementum elit nulla, vitae ultricies augue gravida vulputate. Donec est libero, ullamcorper eu arcu eget, fringilla congue purus. Cras vitae sollicitudin enim, vel dapibus nisl.</p>
                </FooterRickMorty>
                <FooterLinks>
                    <h1>Links utiles</h1>
                    <ul>
                        <li>Home</li>
                        <li>Favorites</li>
                        <li>About</li>
                    </ul>
                </FooterLinks>
                <FooterContact>
                    <h1>Contactos</h1>
                    <ul>
                        <li>New York</li>
                        <li>info@example.com</li>
                        <li>+54 351 666 6666</li>
                    </ul>
                </FooterContact>
            </FooterDiv>
            <FooterCopyright> <h3>© 2023 Copyright - Developer and designed by Fede-Coder</h3> </FooterCopyright>
        </>
    )
}