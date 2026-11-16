import pic from './assets/my fp pic.jpeg'
import About from './about'
import Skills from './skill'
import Projects from './projects'
import Experience from './experience'
import Services from './services'
import Testimonials from './testimonials'
import Contact from './contact'

export default function Home() {

    return (
        <>
            {/* Hero Section */}
            <section className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <p className="text-primary fw-bold">
                                HELLO, WELCOME TO MY PORTFOLIO
                            </p>

                            <h1 className="display-4 fw-bold">
                                I'm Fernandez
                            </h1>

                            <h2 className="text-secondary">
                                Frontend Developer
                            </h2>

                            <p className="lead mt-3">
                                I'm passionate about building responsive,
                                interactive and user-friendly websites
                                using modern web technologies.
                            </p>

                            <div className="d-flex gap-3 mt-4">
                                <a href="/projects" className="btn btn-primary">
                                    View Projects
                                </a>

                                <a href="/contact" className="btn btn-outline-dark">
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <img
                                src={pic}
                                alt="Developer profile"
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: "350px" }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Testimonials />
            <Contact />

        </>
    )
}
