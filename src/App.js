import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <main className="main">
                <Header title='We’re launching soon' />
                <Timer />
            </main>
            <Footer />
        </>
    );
};


export default App;
