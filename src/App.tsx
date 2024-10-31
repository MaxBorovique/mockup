import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { HeroScreen } from "./components/HeroScreen/HeroScreen";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Container>
      <Header />
      <HeroScreen />
      <Main />
      <Footer />
    </Container>
  );
};
