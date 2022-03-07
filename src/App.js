import Header from "./components/Header";
import ImageSlider from "./ImageSlider";
import { GlobalStyles } from "./GlobalStyles";
import TicTacToe from "./TicTacToe";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <ImageSlider />
            <TicTacToe />

        </>
    );
}

export default App;
