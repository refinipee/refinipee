import React from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Container, Form, InputGroup, Button } from 'react-bootstrap';
import forget from '../../assets/forget.png';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../forgot/NewPassword';

function Forget() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://podcast-staging.onrender.com/api/v1/auth/forget-password',
        {
          email: email,
        }
      );

      console.log(response.data);
      // handle successful resetId here
      navigate('/reset-password');
    } catch (error) {
      console.error(error);
      // handle resetId error here
    }
  };

  return (
    <Container>
      <div className="forget_page">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img className="d-block w-100" src={forget} alt="product_image" />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel" onSubmit={handleSubmit}>
              <div className="login flex flex-row justify-center text-center">
                An OTP will be sent to this Email address
              </div>

              <InputGroup className="mb-3" controlId="formGroupEmail">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  {' '}
                  <BsFillEnvelopeFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Example@refinipee.com"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </InputGroup>

              <Button variant="light" className="btn_login_page" type="submit">
                Send OTP
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Forget;
