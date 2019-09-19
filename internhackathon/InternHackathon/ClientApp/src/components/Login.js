import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Box from '@material-ui/core/Box';


const styles = theme => ({
    structure: {
        align: 'center'
    }
});
export class Login extends Component {
  static displayName = Login.name;

    render() {


        const { classes } = this.props;
      return (
          <div>
            <Box height={40}>
            </Box>
            <img src={"https://media.licdn.com/dms/image/C4D0BAQFUce8Fd3B2kg/company-logo_400_400/0?e=1571270400&v=beta&t=r5lod-LORy8s8zTifV2rHElOti8IT0pRVBUuospcR5E"} className="rounded mx-auto d-block" alt="alignment" width="25%"/>

              <Box height={6}>
              </Box>
              <h1 align="center" style={{ margin: "20px 0 30px 0" }}>Login</h1>
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <Form method="get">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                </FormGroup>

                <Box height={20}>
                </Box>
                      <div className="col text-center">
                          <Link to="/home"><button className="btn btn-success">Submit</button></Link>
                </div>
               </Form>
            </Card>
          </div>
    );
  }
}





