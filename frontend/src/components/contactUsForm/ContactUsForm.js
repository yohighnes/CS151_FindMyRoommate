import './ContactUsForm.css';
import customerSupport from '../../pic/support.jpg';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ContactUsForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleMessageChange = (event) => {
        setText(event.target.value);
    };

    const handleOnSubmit = (e) => {
        const emailInfo = {
            email: email,
            name: name,
            text: text
        };

          // send email information to backend
        fetch('http://localhost:8080/contactUs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailInfo)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send email');
            }
            console.log('Email sent successfully');
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="contactus-container">
            <div className="contactus-box">
                <img src={customerSupport} />
            </div>
            <div className="contactus-box">
                <div style={{ textAlign: 'center' }}>
                    <h3 className='section-header'>Get In Touch</h3>

                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="textarea" placeholder="Name" onChange={handleNameChange} value={name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="textarea" placeholder="Message" onChange={handleMessageChange} value={text} as="textarea" rows={5} />
                    </Form.Group>
                    <button className="btn sendBtn" id="submit" type="submit" value="SEND" style={{ backgroundColor: 'orange' }} onClick={handleOnSubmit}>
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                        </div>
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default ContactUsForm;
