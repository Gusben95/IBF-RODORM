import styles from '../styles/Spelschema.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const spelschema = () => {
    return (
        <div>
            <Navbar />
            Information
        
        <div>
            <p>Spelschema och serie:</p>
            
            <a href="https://korpengoteborg.zoezi.se/member#/teamsports/division/96"
            >Länk till div 1 22/23 Korpen Göteborg
            </a>
            </div>
        <div>
            <a href=
            "https://idrottonline.se/KorpforeningGoteborg-Korpen/Idrotter/Innebandy/ResultatSpelprogram"
            >Länk till seriehistorik
            </a>
        </div>

        <div className = {styles.iFrameContainer}>
                <iframe className = {styles.iFrameContent} src="https://korpengoteborg.zoezi.se/member#/teamsports/division/96" scrolling="no"></iframe>
        </div>
        
        
            <Footer />
        </div>
        
    )
}

export default spelschema;
