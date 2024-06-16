import '../assets/styles/home.css'

function Home({languageOption, changeLanguageOption}) {
    return (
        <main>
            <section class="about_me">
                <h2>
                    {languageOption === "en_uk" ? "Hi there! I'm Matheus."
                    : "Olá! Meu nome é Matheus"}
                </h2>
                <p>
                    {languageOption === "en_uk" ? "I'm a 23-year-old computer science student living in the country of Brazil. Ever since I can remember, I've been fascinated by the endless possibilities of technology, which led me to pursue the study of computer science. I'm passionate about coding, problem-solving, and continuously learning new things in this ever-evolving field. I also enjoy immersing myself in music, gaming, and movies, which you can explore more about on my website. Feel free to connect with me through my contact information or on social media."
                    : "Sou um estudante de ciência da computação de 23 anos, vivendo no Brasil. Desde que me lembro, sempre fui fascinado pelas infinitas possibilidades da tecnologia, o que me levou a estudar ciência da computação. Sou apaixonado por programação, resolução de problemas e por estar sempre aprendendo coisas novas nesse campo em constante evolução. Também gosto de me envolver com música, jogos e filmes, sobre os quais você pode explorar mais no meu site. Sinta-se à vontade para entrar em contato comigo através das minhas informações de contato ou nas redes sociais."}
                </p>
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