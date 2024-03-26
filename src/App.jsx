import './App.css'
import imgHeroDesktop from "../public/images/image-web-3-desktop.jpg"
import imgFooter1 from "../public/images/image-retro-pcs.jpg";
import imgFooter2 from "../public/images/image-top-laptops.jpg";
import imgFooter3 from "../public/images/image-gaming-growth.jpg";

function App() {

  return (
      <main>
        <section className='section__hero'>
          <div className='container__imgHero'>
            <img src={imgHeroDesktop}/>
          </div>
          <div className='container__heroTexto'>
            <article className='article__titulo'>
              <h1>The Bright Future of Web 3.0?</h1>
            </article>
            <article className='article__description'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                 But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </article>
          </div>
        </section>
        <section className='section__aside'>
          <h2>New</h2>
          <div className='container__articles'>
            <article>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <hr />
            <article>
              <h3>  The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <hr />
            <article>
              <h3>Is VC Funding Drying Up?</h3>
              <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
          </div>
        </section>
        <section className='section__footer'>
          <article className='footer__article'>
            <div className='footer__article--img'>
              <img src={imgFooter1}/>
            </div>
            <div className='footer__article--texto'>
              <h2>01</h2>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
          <article className='footer__article'>
            <div className='footer__article--img'>
              <img src={imgFooter2}/>
            </div>
            <div className='footer__article--texto'>
              <h2>02</h2>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>
          <article className='footer__article'>
            <div className='footer__article--img'>
              <img src={imgFooter3}/>
            </div>
            <div className='footer__article--texto'>
              <h2>03</h2>
              <h4>The Growth of Gaming</h4>
              <p> How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </section>
      </main>
  )
}

export default App
