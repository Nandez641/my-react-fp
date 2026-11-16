
import {
    Code,
    Monitor,
    Smartphone,
    Layout,
    Utensils,
    Settings
} from "lucide-react"

export default function Services() {

    const services = [
        {
            id: 1,
            title: "Frontend Web Development",
            description: "Building modern website interfaces using React, JavaScript, HTML and CSS.",
            icon: <Code size={35} />
        },
        {
            id: 2,
            title: "Responsive Web Design",
            description: "Creating websites that adapt to mobile phones, tablets and desktop screens.",
            icon: <Smartphone size={35} />
        },
        {
            id: 3,
            title: "UI Development",
            description: "Developing clean and interactive website layouts, navigation bars, cards and forms.",
            icon: <Layout size={35} />
        },
        {
            id: 4,
            title: "Restaurant Website Development",
            description: "Creating restaurant websites with food menus, dish displays and contact options.",
            icon: <Utensils size={35} />
        },
        {
            id: 5,
            title: "Website Design",
            description: "Turning ideas into attractive and user-friendly website layouts.",
            icon: <Monitor size={35} />
        },
        {
            id: 6,
            title: "Website Updates",
            description: "Improving website content, styling and layouts as project needs change.",
            icon: <Settings size={35} />
        }
    ]

    return (
        <section className="container py-5" id="services">

            <div className="text-center mb-5">
                <p className="text-primary fw-bold">WHAT I CAN DO</p>
                <h2 className="fw-bold">My Services</h2>
                <p className="text-secondary">
                    Web development solutions I am building my skills to provide.
                </p>
            </div>

            <div className="row">

                {services.map((service) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={service.id}>

                        <div className="card border-0 shadow-sm p-4 h-100">

                            <div className="text-primary mb-3">
                                {service.icon}
                            </div>

                            <h5 className="fw-bold">
                                {service.title}
                            </h5>

                            <p className="text-secondary mb-0">
                                {service.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}
