import '../assets/styles/home.css'

function Home() {
    return (
        <main>
            <section class="about_me">
                <h2>Hi there! I'm Matheus.</h2>
                <p>I'm a 23-year-old computer science student living in the country of Brazil. Ever since I can remember, I've been fascinated by the endless possibilities of technology, which led me to pursue the study of computer science. I'm passionate about coding, problem-solving, and continuously learning new things in this ever-evolving field. I also enjoy immersing myself in music, gaming, and movies, which you can explore more about on my website. Feel free to connect with me through my contact information or on social media.</p>
                <ul class="social_media">
                    <li><a href="mailto:matheusweish@gmail.com" target="blank"><div class="social_media_anchor gmail"></div></a></li>
                    <li><a href="https://github.com/MatheusWeisheimer" target="blank"><div class="social_media_anchor github"></div></a></li>
                    <li><a href="https://www.linkedin.com/in/matheus-weisheimer-30325a242/" target="blank"><div class="social_media_anchor linkedin"></div></a></li>
                </ul>
            </section>
        </main>
    );
}

export default Home;