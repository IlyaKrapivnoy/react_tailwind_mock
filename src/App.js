import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div>
            <Header />
            <div className='homeContainer'>
                <Feed />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
