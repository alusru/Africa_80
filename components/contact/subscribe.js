const Subscribe = () => {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <p className="top_text">Subscribe now</p>
            <h1>Subscribe Now And Receive The Weekly Newsletter </h1>
            <div id="mc_embed_signup">
              <form>
                <div className="row align-items-center">
                  <div className="col-lg-5 mb-lg-0 mb-3">
                    <input
                      className="form-control"
                      placeholder="Your name"
                      required=""
                      type="email"
                    />
                  </div>
                  <div className="col-lg-5 mb-lg-0 mb-3">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your Email"
                      required=""
                      type="email"
                    />
                  </div>
                  <div className="col-lg-2">
                    <button className="primary-btn" type="submit">
                      Subscribe
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        type="text"
                      />
                    </div>

                    <div className="info" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
