import "../css/MainProjects.css"
import Typewriter from "react-typewriter-effect";
import { Container, Row, Col, Card, Button } from "react-bootstrap";



const MainProjects = () => {

    const projects = [
  {
    name: "Veterinaria",
    description: "Tienda online para mascotas con catálogo de productos, buscador, carrito de compras y contacto directo.",
    githubLink: "https://github.com/FrancoGAlbornoz/Veterinaria"
  },
  {
    name: "Rick y Mory API",
    description: "Aplicación que consume la API de Rick and Morty para buscar y visualizar personajes con sus detalles. Incluye paginación y búsqueda por nombre.",
    githubLink: "https://github.com/antogiusiano/Rick-y-Morty-API"
  },
    {
    name: "Proyecto 3",
    description: "Descripción breve del proyecto 2.",
    githubLink: "https://github.com/tuusuario/proyecto2"
  },
];

    return (
        <div>
            <div className='hero'>
                <Typewriter
                    text="Mis Proyectos"
                    typeSpeed={80}
                    cursorColor="#8a0648"
                    loop
                />
            </div>
            <Container className="projects-container mt-5">
                <Row className="mt-4">
                    {projects.map((project, index) => (
                        <Col md={6} lg={4} key={index}>
                            <Card className="project-card text-center">
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="dark" href={project.githubLink} target="_blank">
                                Ver en GitHub
                                </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>

            




        </div>
    )
}

export default MainProjects