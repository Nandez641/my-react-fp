
import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "sonner"
import { Send } from "lucide-react"

export default function Contact() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInput = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!input.name || !input.email || !input.subject || !input.message) {
            toast.warning('All fields are required to proceed')
            return
        }

        toast.success('Your message has been submitted!')

        setInput({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <section className="container py-5" id="contact">

            <div className="text-center mb-4">
                <p className="text-primary fw-bold">GET IN TOUCH</p>
                <h2 className="fw-bold">Contact Me</h2>
                <p className="text-secondary">
                    Have a project or opportunity? Feel free to reach out.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">

                    <form onSubmit={handleForm}>

                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                value={input.name}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={input.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={input.subject}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                name="message"
                                className="form-control"
                                rows={5}
                                placeholder="Write your message"
                                value={input.message}
                                onChange={handleInput}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Send Message <Send size={16} />
                        </button>

                    </form>

                </div>
            </div>

        </section>
    )
}
