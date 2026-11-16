
import { Quote } from "lucide-react"

export default function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "FERKAMS CATERING AND CONFECTIONARIES",
            role: "Project Manager",
            message: "Fernandez showed creativity and dedication while working on the website project."
        },
        {
            id: 2,
            name: "MY REACT TEACHER",
            role: "Student",
            message: "The website was well structured, responsive and easy to navigate."
        },
        {
            id: 3,
            name: "TM-SHELTERS",
            role: "Project Manager",
            message: "I appreciate the effort put into the design and the attention given to the details."
        }
    ]

    return (
        <section className="container py-5" id="testimonials">

            <div className="text-center mb-5">
                <p className="text-primary fw-bold">FEEDBACK</p>
                <h2 className="fw-bold">Testimonials</h2>
                <p className="text-secondary">
                    What people say about my work.
                </p>
            </div>

            <div className="row">

                {testimonials.map((testimonial) => (
                    <div className="col-md-4 mb-4" key={testimonial.id}>

                        <div className="card border-0 shadow-sm p-4 h-100">

                            <div className="text-primary mb-3">
                                <Quote size={30} />
                            </div>

                            <p className="text-secondary">
                                "{testimonial.message}"
                            </p>

                            <div className="mt-auto">
                                <h6 className="fw-bold mb-1">
                                    {testimonial.name}
                                </h6>

                                <small className="text-muted">
                                    {testimonial.role}
                                </small>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}
