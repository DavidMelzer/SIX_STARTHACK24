import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center text-center bg-blue-300 h-screen">
            <div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount(count => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    );
}

export default App;
