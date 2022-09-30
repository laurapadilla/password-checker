import { GlobalStyles, Container } from "./styles";
import { PWGenerate } from "./components/PWGenerate";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <PWGenerate />
      </Container>
    </>
  );
}
