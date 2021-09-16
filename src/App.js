import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='relative bg-gray-50 h-full'>
            <Header />
            <div className='flex max-w-4xl px-3 py-6 mx-auto justify-between '>
                <Feed />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
