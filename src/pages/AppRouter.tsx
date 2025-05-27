import { HashRouter, Routes, Route } from 'react-router-dom';
import { SkyPage } from './sky/SkyPage.tsx';
import { RotationPage } from './rotation/RotationPage.tsx';
import { FrontPage } from './FrontPage.tsx';
import { ComparisonPageOld } from './errors/ComparisonPageOld.tsx';
import { TestPage } from './TestPage.tsx';
import { TestPage as TestPageOld } from './TestPageOld.tsx';
import { PrecessionPage } from './precession/PrecessionPage.tsx';
import { StarsPage } from './stars/StarsPage.tsx';
import { SphericalPage } from './spherical/Spherical.tsx';
import { ComparisonPage } from './errors/ComparisonPage.tsx';
import { ChartTest } from './chart/ChartTest.tsx';

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
                <Route path="/comparison_old" element={<ComparisonPageOld />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/test_old" element={<TestPageOld />} />
                <Route path="/spherical" element={<SphericalPage />} />
                <Route path="/star_chart" element={<ChartTest />} />
            </Routes>
        </HashRouter>
    </>);
};

export { AppRouter };