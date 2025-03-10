import { HashRouter, Routes, Route } from 'react-router-dom';
import { SkyPage } from './SkyPage.tsx';
import { RotationPage } from './RotationPage.tsx';
import { FrontPage } from './FrontPage.tsx';
import { TestPage } from './TestPage.tsx';
import { PrecessionPage } from './PrecessionPage.tsx';

const AppRouter = () => {
    return (<>
        <HashRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/sky" element={<SkyPage />} />
                <Route path="/rotation" element={<RotationPage />} />
                <Route path="/precession" element={<PrecessionPage />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </HashRouter>
    </>);
};

export { AppRouter };