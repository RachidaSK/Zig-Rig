import React, { Component } from "react";
import { Column, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import DeleteButton from "../../components/DeleteButton";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import '../../components/Auth/Auth';
import { setIdToken, setAccessToken, isLoggedIn } from "../../components/Auth/Auth";
import jwt_decode from 'jwt-decode';
import Footer from "../../components/Footer";


class MyProjects extends Component {
    state = {
        projects: []
      };

    componentWillMount () {
        require( "./MyProjects.css" );
    }
    componentDidMount() {
        let userId = "";
        if (localStorage.getItem('id_token')) {
            let uid = localStorage.getItem('id_token');
            let userInfo = jwt_decode(uid);
            userId = userInfo.sub;
            console.log(userId);
        }
        this.loadProjects(userId);
      }
    loadProjects = (userId) => {
        API.getProjects(userId)
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
                        <hr />
                        <Row>
                            <Column size="lg-12">
                                <h6>Example Project #2</h6>
                                <DeleteButton />
                            </Column>
                        </Row>
                        <hr />
                        <Row>
                            <Column size="lg-12">
                                <h6>Example Project #3</h6>
                                <DeleteButton />
                            </Column>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }        
}


export default MyProjects;