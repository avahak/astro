import { HashRouter, Routes, Route } from 'react-router-dom';
import { SkyPage } from './sky/SkyPage.tsx';
import { RotationPage } from './rotation/RotationPage.tsx';
import { FrontPage } from './FrontPage.tsx';
import { ComparisonPage } from './ComparisonPage.tsx';
import { TestPage } from './TestPage.tsx';
import { PrecessionPage } from './precession/PrecessionPage.tsx';
import { StarsPage } from './stars/StarsPage.tsx';
import { SphericalPage } from './spherical/Spherical.tsx';

const AppRouter = () => {
    return (<>
        <HashRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/sky" element={<SkyPage />} />
                <Route path="/rotation" element={<RotationPage />} />
                <Route path="/precession" element={<PrecessionPage />} />
                <Route path="/stars" element={<StarsPage />} />
                <Route path="/comparison" element={<ComparisonPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/spherical" element={<SphericalPage />} />
            </Routes>
        </HashRouter>
    </>);
};

export { AppRouter };