const Form = () => {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4" />
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              novalidate="novalidate"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols="30"
                      rows="9"
                      placeholder="Enter Message"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-2 mb-5 mb-lg-0">
                <button
                  type="submit"
                  className="button button-contactForm primary-btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="fa fa-home" />
              </span>
              <div className="media-body">
                <h3>138 West Street, Sandton</h3>
                <p>Johannesburg | South Africa</p>
                <p>
                  [The Africa80 is housed under The Business Development Agency
                  (Pty) Ltd]
                </p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="fa fa-phone" />
              </span>
              <div className="media-body">
                <h3>
                  <a href="tel:454545654">00 (440) 9865 562</a>
                </h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="fa fa-envelope-o" />
              </span>
              <div className="media-body">
                <h3>
                   <a href="mailto:info@africa80.org">info@africa80.org</a>
                </h3>
                <p>For General Enquiries:</p>
                <h3>
                  <a href="mailto:media@africa80.org">media@africa80.org</a>
                </h3>
                <p>For Media related Enquiries:</p>
                <h3>
                  <a href="mailto:donation@africa80.org">
                    donation@africa80.org
                  </a>
                </h3>
                <p>For Donation Enquiries: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
