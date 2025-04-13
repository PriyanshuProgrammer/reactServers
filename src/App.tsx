import './App.css';
import { Card } from './components/card';
import { Suspense } from 'react';

function App() {
    console.log("app comp")
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Card></Card>
            </Suspense>
        </>
    );
}

export default App;
