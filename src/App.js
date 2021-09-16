import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='bg-gray-50 h-screen'>
            <Header />
            <div className='flex max-w-4xl px-3 my-6 mx-auto justify-between '>
                <Feed />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
