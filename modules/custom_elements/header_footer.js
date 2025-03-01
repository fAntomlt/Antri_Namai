class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <!-- HEADER -->
        <nav class="header">
            <section class="klaseFlex">
                <div class="antriN">
                    <img class="logoDydis" src="https://cdn-icons-png.flaticon.com/512/3769/3769017.png" alt="mažas namelis su letena"> 
                    <a href="../index.html"><h3 class="antriH">Antri namai</h3></a>
                </div>
                <div class="centerRigth">
                    <a class="klaseA" href="../Parama_page/parama.html">Parama</a>
                    <a class="klaseA" href="../gyvunu_page/index.html">Gyvūnai</a>
                    <a class="klaseA" href="../registracijos_forma/index.html">Vizitas</a>
                    <a class="klaseA" href="../kontaktu_page/index.html">Kontaktai</a>
                </div>
            </section>
        </nav>
    </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() { 
        this.innerHTML = `
        <div class="footer-wrapper">
            <svg viewBox="0 0 1440 320">
                <path fill="#2aabd6" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224V320H0Z"></path>
            </svg>
            <footer>
                <div class="footer-column">
                    <img src="https://cdn-icons-png.flaticon.com/512/3769/3769017.png" alt="logo" class="fLogo"/>
                    <h3 class="fH3">Prieglauda</h3>
                    <div>
                        <p>
                            Tel.nr.: 0 683 93286<br>
                            El.paštas: info@antrinamai.lt<br>
                            Adresas: Ozo g. 35, Vilnius<br>
                            Darbo laikas: I-VII 10-19 val.
                        </p>
                    </div>
                    <div>
                        <a href="#" target="_blank" class="fSocial">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" target="_blank" class="fSocial">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" target="_blank" class="fSocial">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" target="_blank" class="fSocial">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-column">
                    <h2>Nepraleisk naujienų</h2>
                    <p class="pRegistration">Užsiregistruokite prenumeratai!</p>
                    <div>
                        <form>
                            <input type="text" id="fGmail" class="fGmail" name="fGmail" placeholder="Įrašykite el.paštą"><br><br>
                            <input type="submit" value="Pateikti" id="fSubmitButton"> 
                        </form>
                    </div>   
                </div>
                <div class="rightsReserved">
                    <p>Antri Namai<br> © 2025 All Rights Reserved</p>
                </div>
            </footer>
        </div>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)