import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.tsx';

const AppRouter = () => {
    return (<>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </HashRouter>
    </>);
};

export { AppRouter };