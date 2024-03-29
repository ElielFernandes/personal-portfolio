import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { AnimationTest } from "./pages/Animation";


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/animation" element={<AnimationTest/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}