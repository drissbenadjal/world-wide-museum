import "@/styles/globals.css";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <SwitchTransition mode="out-in">
        <CSSTransition key={Component} classNames="fade" timeout={400}>
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
}
