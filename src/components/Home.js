import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center" id='home'>
        <Col md="auto" className='name'>
          <h2>Łukasz Biś</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className='about'>
          <p><b>Miejscowość: </b>Libidza</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className='about'>
        <p><b>E-mail: </b>lukasz.bis22@gmail.com</p>
        </Col>
      </Row>
      <Row className='omnie' id='omnie'>
        <h3>O mnie</h3>
        <p>Jestem absolwentem Informatyki ze specjalnością Programowanie Aplikacji
          Internetowych. Pierwsze realne doświadczenie zdobyłem w firmie ZF dla której
          wykonałem aplikację mobilną. Chciałbym rozwijać się w kierunku aplikacji
          internetowych lub cyberbezpieczeństwa.
        </p>
      </Row>
      <Row className='doswiadczenie' id='doswiadczenie'>
        <h3>Doświadczenie</h3>
        <h5>SAP Developer</h5>
        <h5>ZF Group | Częstochowa</h5>
        <div className='period'>
          <p>07.2023 - 09.2023 &middot; 3 mies. &middot; praktyka zawodowa</p>
        </div>
        <div className='description'>
          <p>Pracowałem jako praktykant programista ABAP. Moje główne zadania obejmowały
            tworzenie aplikacji skanerowej, która miała pomóc w inwentaryzacji magazynu. Przy
            tworzeniu tej aplikacji korzystałem z React.js, i ABAP.
          </p>
        </div><br/>
        <h5>Order Picker</h5>
        <h5>Mainfreight | Zaltbommel</h5>
        <div className='period'>
          <p>07.2022 - 09.2022 &middot; 3 mies. &middot; UoP</p>
        </div>
        <div className='description'>
          <p>Pracowałem jako Order Picker na magazynie. Moimi zadaniami było kompletowanie
            zamówień i dostarczanie ich na czas do wysyłki, rozwożenie zamówień po magazynie.
            Komunikacja z współpracownikami w Jezyku angielskim.
          </p>
        </div><br/>
        <h5>Serwisant</h5>
        <h5>WILICOM | Kłobuck</h5>
        <div className='period'>
          <p>05.2018 - 06.2018 &middot; 1 mies. &middot; praktyka zawodowa</p>
        </div>
        <div className='description'>
          <p>Pracowałem jako praktykant w serwisie Komputerowym. Moimi głównymi zadaniami były
            diagnostyka i naprawa komputerów i laptopów. Dzięki tym praktykom zyskałem ogromną
            wiedzę na temat sprzętu komputerowego i przyczyn potencjalnych usterek.
          </p>
        </div>
      </Row>
      <Row className='edukacja' id='edukacja'>
        <h3>Edukacja</h3>
        <h5>Informatyka</h5>
        <h6>Cyberbezpieczeństwo</h6>
        <h5>Politechnika Częstochowska</h5>
        <div className='period'>
          <p>02.2024 - obecnie &middot; Magister inżynier</p>
        </div>
        <div className='description'>
          <ul>
            <li>
              <b>Temat pracy magisterskiej: </b> cos cos
            </li>
            <li>
              <b>Opis pracy magisterskiej: </b> cos cos
            </li>
          </ul> 
        </div><br/>
        <h5>Informatyka</h5>
        <h6>Programowanie Aplikacj Internetowych</h6>
        <h5>Politechnika Częstochowska</h5>
        <div className='period'>
          <p>10.2020 - 02.2024 &middot; Inżynier</p>
        </div>
        <div className='description'>
          <ul>
            <li>
              <b>Temat pracy magisterskiej: </b> Aplikacja mobilna do skanowania produktów w systemie SAP
            </li>
            <li>
              <b>Opis pracy magisterskiej: </b> Praca dotyczy projektowania, implementacji i analizy aplikacji, której głównym obszarem zastosowania jest efektywne zarządzanie magazynem. Aplikacja została zbudowana w celu nie tylko stworzenia funkcjonalnej aplikacji, ale również głębsze zrozumienie procesów magazynowych i ich optymalizacja przy wykorzystaniu nowoczesnych technologii. Wykorzystano technologie, takie jak SAP ABAP do implementacji logicznego rdzenia aplikacji. Ten język programowania został wybrany ze względu na swoją specjalizację w obszarze systemu SAP, co zapewnia skuteczną i spójną logikę działania aplikacji. Dodatkowo, do stworzenia interaktywnego i nowoczesnego interfejsu użytkownika wykorzystano framework React. Zastosowanie tych technologii pozwoliło na skuteczne połączenie specjalizacji systemu SAP z dynamicznym, intuicyjnym interfejsem, zapewniając optymalne doświadczenia dla użytkowników aplikacji do zarządzania magazynem. Aplikacja umożliwia skanowanie unikalnych numerów przypisanych do miejsc w magazynie i produktów, zapewniając bieżącą aktualizację stanu magazynowego.
            </li>
          </ul> 
        </div><br/>
        <h5>Technik Informatyk</h5>
        <h5>Zespół Szkół Nr 1 im. Jana Kilińskiego w Kłobucku</h5>
        <div className='period'>
          <p>09.2016 - 06.2020</p>
        </div>
        <div className='description'>
          <ul>
            <li>
              <b>Temat pracy magisterskiej: </b> Aplikacja mobilna do skanowania produktów w systemie SAP
            </li>
          </ul> 
        </div>
      </Row>
      <Row className='umiejetnosci' id='umiejetnosci'>
        <h3>Umiejętności</h3>
        <div className='box'>
          <div className='item'>GitHub</div>
          <div className='item'>React.js</div>
          <div className='item'>Angular</div>
          <div className='item'>WebAPI</div>
          <div className='item'>SAP</div>
          <div className='item'>ABAP</div>
        </div>
        <div className='box'>
          <div className='item'>WordPress</div>
          <div className='item'>Elementor</div>
          <div className='item'>MS Office</div>
        </div>
        
        <div className='box'>
          <div className='item'>Dokładność</div>
          <div className='item'>Komunikatywność</div>
          <div className='item'>Praca zespołowa</div>
          <div className='item'>Prawno jazdy kab. B</div>
          <div className='item'>Chęć zdobywania doświadczenia</div>
        </div>
      </Row>
      <Row className='kontakt' id='kontakt'>
        <h3>Kontakt</h3>
        <p><FontAwesomeIcon icon={faLocationDot}/> Libidza, woj. Śląskie</p>
        <p><FontAwesomeIcon icon={faEnvelope}/> lukasz.bis22@gmail.com</p>
      </Row>
      <Row className='footer'>
        <p>Copyright &copy; Łukasz Biś 2024</p>
      </Row>
    </Container>
    </>
  );
}

export default Home;
