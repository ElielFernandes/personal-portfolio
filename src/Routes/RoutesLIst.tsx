import { Home } from '../pages/Home';
import { Route, Routes} from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

export const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={ <Contact/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>  
    );
}