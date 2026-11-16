
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/publicLayout'
import Home from './home'
import About from './about'
import Contact from './contact'
import Experience from './experience'
import Testimonials from './testimonials'
import Projects from './projects'
import Services from './services'
import Skills from './skill'
const App = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<PublicLayout />}>

                    <Route path='/home' index element={<Home />} />
                    <Route path='skill' element={<Skills />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='services' element={<Services />} />
                    <Route path='testimonials' element={<Testimonials />} />

                </Route>

            </Routes>
        </>
    )
}

export default App
