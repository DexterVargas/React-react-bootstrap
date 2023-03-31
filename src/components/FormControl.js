import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormSection() {
  return (
    
    <Form>
        <h4>Whant to recieve product updates? click Subscribe.</h4>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup className="mb-3" hasValidation>
                <FloatingLabel label="Email address" controlId="floatingInput">
                    <Form.Control type="email" placeholder="name@example.com"/>
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>
                </FloatingLabel>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <FloatingLabel label="Password" controlId="floatingpassword">
                <Form.Control type="password" placeholder="password"/>
            </FloatingLabel>
        </Form.Group>

        <Form.Group className='mb-3'>
            <Form.Label>Current Javascript Level</Form.Label>
            <Form.Range />
            <Form.Select aria-label="Default select example">
                <option>Select Subscription</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Receive weekly update." />
        </Form.Group>
        <Form.Group className="mb-5">
            <Form.Label>Payment Method</Form.Label>
            <Form.Check type="radio" name="pay" label="Visa" />
            <Form.Check type="radio" name="pay" label="MasterCard" />
            <Form.Check type="radio" name="pay" label="GCash" />
            <Form.Check type="radio" name="pay" label="Paypal" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default FormSection;