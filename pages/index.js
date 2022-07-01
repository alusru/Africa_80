import { useState } from "react";
import Layout from "../components/Layout";
import ImageSlider from "../components/image_slider";
import DonateCard from "../components/donate";
import FeatureItem from "../components/feature";
import MediumCard from "../components/medium_card";
import Help from "../components/help/help";
const Home = () => {
  // Dontate state
  const [donate_items, setDonateItems] = useState([
    {
      image: "/static/img/causes/c1.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c2.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c2.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c2.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    }
  ]);

  // Feature State
  const [feature_items, setFeatures] = useState([
    {
      feature_icon: "fi flaticon-compass",
      title: "Inclusiveness",
      feature_content:
        "If you want to go fast, Go alone. If you want to go far GO TOGETHER"
    },
    {
      feature_icon: "fi flaticon-desk",
      title: "Collaboration",
      feature_content:
        "Collaboration divides the task and multiplies the success"
    },
    {
      feature_icon: "fi flaticon-bathroom",
      title: "Education",
      feature_content: "If knowledge is power, then education is the force"
    }
  ]);

  // Feature State
  const [card_items, setCardContent] = useState([
    {
      number: "01",
      text:
        "Using an assortment of media products as platforms to advocate collaboration."
    },
    {
      number: "02",
      text:
        "Identifying opportunities for collaboration at a local; national; and continental level."
    },
    {
      number: "03",
      text:
        "Create new or join existing platforms to amplify the importance of collaboration."
    },
    {
      number: "04",
      text:
        "Use the Annual Africa80 Summit as a platform to co-create collaborative solutions with youth across the continent and publish solutions identified."
    }
  ]);

  return (
    <Layout>
      <section
        className='home-banner-area relative'
        id='home'
        data-parallax='scroll'
        data-image-src='/static/img/A80_events/header.jpg'
      >
        <div className='overlay-bg overlay' />
        <div className='container'>
          <div className='row fullscreen justify-content-lg-end'>
            <div className='banner-content col-lg-7'>
              <h2 className='overlay-text'>
                THE POWER OF COLLABORATION FOR TRANFORMING AFRICA.
              </h2>
              <a href='#' className='primary-btn join-us-btn'>
                Join us
                <i className='ti-angle-right ml-1' />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='about_area lite_bg'>
        <div className='container'>
          <div className='row align-items-end'>
            <div className='col-lg-5'>
              <div className='about_details lite_bg'>
                <h2>We Are A Non-profit Organization </h2>
                <p className='top_text'>
                  The Africa80 is an advocacy network of young African leaders
                  in various sectors of influence from business &amp;
                  entrepreneurship; public; to civic leadership.
                </p>
                <h3>Our Mission</h3>
                <p className='mission-text'>
                  The Africa80 network mobilises communities toward
                  collaborative brilliance in a variety of new and existing
                  projects that directly or indirectly strengthens the economic
                  transformation of those communities. In many instances
                  opportunity for collaborative partnerships required to solve
                  pressing problems already exist. What usually is at lack is
                  the advocacy; how-to skill; networks; or the will to
                  successfully execute projects through collaboration.
                </p>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none'>
              <div className='about_right'>
                <div className='video-inner justify-content-center align-items-center d-flex'>
                  <a
                    id='play-home-video'
                    className='video-play-button'
                    href='https://www.youtube.com/watch?v=VWi-qLt6oxA'
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about_bg d-lg-block d-none' />
        </div>
      </section>

      <section className='features-area section-gap-top'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h2>
                  Our <span>Values</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row feature_inner'>
            {feature_items.map((item, index) => (
              <FeatureItem item={item} key={index} />
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h2>
                  How <span>do we do it?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row feature_inner how-feature '>
            {card_items.map((item, index) => (
              <MediumCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about_bg {
          background: linear-gradient(
            90deg,
            rgb(255, 255, 255) 0%,
            rgba(32, 3, 187, 0.31) 60%,
            rgba(4, 0, 90, 0.76) 100%
          );
        }
        .top_text {
          color: #2d2d2d;
        }
        .banner-content {
          margin-top: 30%;
          margin-bottom: 0;
        }
        .about_details h2 {
          color: #4d447b;
        }
        .about_details h3 {
          color: #323358;
          font-size: 35px;
          margin-top: 40px;
          margin-bottom: 15px;
        }
        .mission-text {
          font-size: 16px;
        }
        .overlay-text {
          color: #fff;
          font-size: 50px;
          font-weight: 700;
        }
        .about_right {
          background: url(/static/img/Africa80.jpg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          position: relative;
          top: -200px;
        }
        .video-inner {
          border: 8px solid #fff;
        }
        .section-title h2 span {
          color: #323358;
        }
        .card-container:nth-child(even) {
          background-color: blue;
        }
        .join-us-btn:hover {
          background: #2d0e0e;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
