import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Patryk Krawczyk"
      body={
        <>
          <Wrapper>
            <p>
              Jestem <b>programistą PrestaShop 🐧</b>, moje główne obszary
              zainteresowań to full-stack. Cieszę się, że posiadam zakres
              umiejętności, który obejmuje zarówno warstwę interfejsu
              użytkownika, jak i backend. Studiuję informatykę, przez co
              bardziej angażuje się w rozwój wiedzy i umiejętności związanych z
              programowaniem. Informatyka jest dynamicznym obszarem, który stale
              się rozwija, a moje studia pozwalają mi nadążać za nowymi
              technologiami i trendami.
            </p>
            <p>
              Poza programowaniem, interesuję się amerykańską motoryzacją. To
              fascynujące, ponieważ branża motoryzacyjna oferuje wiele
              możliwości do zastosowania technologii i innowacji.🚗
            </p>
            <p>
              Jazda quadem to kolejna moja pasja, która pozwala mi cieszyć się
              przygodami na otwartym powietrzu. Jest to również doskonały sposób
              na relaks po długim dniu pracy przed komputerem. Moje
              zainteresowanie jazdą quadem pokazuje również, że lubię wyzwania i
              eksplorację. Podsumowując, jestem programistą PrestaShop o
              szerokim zakresie umiejętności. 😀
            </p>
          </Wrapper>
        </>
      }
    />
  </Container>
);

export default Author;
