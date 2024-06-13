import '../assets/styles/footer.css'
import dora from '../assets/images/dora.jpg'

function Footer() {
    return(
        <footer>
            <img class="dora" src={dora} alt="cute god" />
            <span>2024 Matheus Weisheimer</span>
        </footer>
    );
}

export default Footer;