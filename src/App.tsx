import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { HeroScreen } from "./components/HeroScreen/HeroScreen";

export const App = () => {
  return (
    <Container>
      <Header />
      <HeroScreen />
    </Container>
  );
};
