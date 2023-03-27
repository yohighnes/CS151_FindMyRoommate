import './ContactUsForm.css';
import customerSupport from '../../pic/support.jpg';
import Form from 'react-bootstrap/Form';

function ContactUsForm() {
    return (
        <div className="contactus-container">
          <div className="article">
          <img src={customerSupport}/>
          </div>
          <div className="contactus-box">
            <div style={{textAlign: 'center'}}>
                <h3 className='section-header'>Get In Touch</h3>

            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="textarea" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder="Message" as="textarea" rows={5} />
                </Form.Group>
                <button class="btn send-button" id="submit" type="submit" value="SEND" style={{backgroundColor: 'orange'}}>
                    <div class="alt-send-button">
                    <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                    </div>
                 </button>
            </Form>
          </div>
      </div>
    );
}

export default ContactUsForm;