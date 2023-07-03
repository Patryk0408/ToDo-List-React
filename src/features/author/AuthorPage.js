import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Patryk Krawczyk"
      body={
        <>
          <p>
            Jestem <b>programistą PrestaShop</b>, moje główne obszary
            zainteresowań to full-stack. To świetnie, że posiadam szeroki zakres
            umiejętności, który obejmuje zarówno warstwę interfejsu użytkownika,
            jak i backend. Studiuję informatykę, co pokazuje moje zaangażowanie
            w rozwój wiedzy i umiejętności związanych z programowaniem.
            Informatyka jest dynamicznym obszarem, który stale się rozwija, a
            moje studia pozwalają mi nadążać za nowymi technologiami i trendami.
          </p>
          <p>
            Poza programowaniem, interesuję się amerykańską motoryzacją. To
            fascynujące, ponieważ branża motoryzacyjna oferuje wiele możliwości
            do zastosowania technologii i innowacji. Moja pasja do amerykańskiej
            motoryzacji może również wpływać na moje projekty, inspirując mnie
            do tworzenia aplikacji i rozwiązań związanych z tym tematem.
          </p>
          <p>
            Jazda quadem to kolejna moja pasja, która pozwala mi cieszyć się
            przygodami na otwartym powietrzu. Jest to również doskonały sposób
            na relaks po długim dniu pracy przed komputerem. Moje
            zainteresowanie jazdą quadem pokazuje również, że lubię wyzwania i
            eksplorację. Podsumowując, jestem programistą PrestaShop o szerokim
            zakresie umiejętności.
          </p>
          <p>
            Studiuję informatykę i pasjonuję się programowaniem, amerykańską
            motoryzacją oraz jazdą quadem. Moje zainteresowania wzbogacają moją
            osobowość i mogą wpływać na moje podejście do programowania i
            tworzenia nowych rozwiązań.
          </p>
        </>
      }
    />
  </Container>
);

export default Author;
