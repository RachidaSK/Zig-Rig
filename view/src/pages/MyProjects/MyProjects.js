import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import DeleteButton from "../../components/DeleteButton";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";




class MyProjects extends Component {
    state = {
        projects: []
      };

    componentWillMount () {
        require( "./MyProjects.css" );
    }
    componentDidMount() {
        this.loadProjects();
      }
    loadProjects = () => {
        API.getProjects()
          .then(res =>
            this.setState({ projects: res.data })
          )
          .catch(err => console.log(err));
      };

    deleteProject = (id) => {
        API.deleteProject(id)
        .then(res =>
            this.loadProjects()
        )
        .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <NavBar />
                <br />
                <Container fluid>
                    <div className="myProjectsContainer">
                        <Row>
                            <Column size="lg-12">
                                {this.state.projects.length ? (
                                <List>
                                    {this.state.projects.map(project => (
                                    <ListItem key={project._id}>
                                        <Link to={"/home/" + project._id}>
                                        <strong>
                                            {project.name}
                                        </strong>
                                        </Link>
                                        <DeleteButton onClick={() => this.deleteProject(project._id)} />
                                    </ListItem>
                                    ))}
                                </List>
                                ) : (
                                <h3>No Results to Display</h3>
                                )}
                            </Column>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }        
}

export default MyProjects;