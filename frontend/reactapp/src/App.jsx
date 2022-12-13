import logo from './logo.svg';
import './App.css';

function App() {
  return <>
    <div className="partea_superioara">
        <header>
            <img className="logo" src="img/Logo.jpg" alt="logo" />

            <div className="butoane">
                <a className="logare" href="#" ><button>Logare</button></a>
                <a className="creare_cont" href="#"><button>Creare cont</button></a>
            </div>
            
            
        </header>
        <div className="hamburger" onClick={() => document.getElementById('check').checked = !document.getElementById('check').checked}>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
        </div>
        <input type="checkbox" id="check" defaultChecked={true} ></input>
        <div className="drop-down">
            <a className="logare2" href="#"><button>Logare</button></a>
            <a className="creare_cont2" href="#"><button>Creare cont</button></a>
        </div>
    </div>

    <div className="partea_din_mijloc">
        <div className="stanga">
            <h1>Partajarea de meme-uri nu a fost niciodata mai simpla!</h1>
            <p>Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.</p>
            <div className="upload"><button>Upload a MEME</button></div>
        </div>
        <div className="tipu_cu_sarea">
            <img className="tipu_cu_sarea_poza" src="img/tipu_cu_sarea.jpg" />
        </div>
    </div>

    <div className="partea_de_jos">
        <div className="email">
            <div className="continut_mail">
                <div className="left">
                    <h1>Ai tupeu si crezi ca esti amuzant?</h1>
                    <p>Trimite-ne un mail si poate ai noroc sa ne apuce rasul cand iti vedem meme-ul.</p>
                </div>
                <div className="right">
                    <form method="get">
                        <label>Descriere</label><br/>
                        <input className="descriere"type="text" placeholder="descriere" /><br/><br/>
                        <label>Meme(jpg, jpeg, png, gif)</label><br/>
                        <input className="drag_and_drop" type="text" placeholder="drag & drop image or click to upload" /><br/><br/>
                        <input className="submit" type="submit" value="Trimite" /><br/>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <footer>
        <div>
            <h1>Most Viewed</h1>
        </div>
        <div className="carusel">
                <img className="img1" src="img/image1.jpg" alt="" />
                <img className="img2" src="img/image2.jpg" alt="" />
                <img className="img3" src="img/image3.jpg" alt="" />
        </div>
        <div className="bara_jos">
            <div className="la_munca">
                <img className="nu_la_intins_mana" src="img/la_munca.jpg" />
                <img className="insta" src="img/insta.png" />
                <img className="twitch" src="img/twitch.png" />
                <img className="facebook" src="img/facebook.png" />
                <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
            </div>
        </div>
        
    </footer>
  </>;
}

export default App;
