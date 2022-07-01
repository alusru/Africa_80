import { useState } from "react";
import Layout from "../components/Layout";
import DonateCard from "../components/donate";
import ImageSlider from "../components/mini_slider";

const Donate = () => {
  const [donate_items, setstate] = useState([
    {
      image: "/static/img/causes/c1.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c1.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    }
  ]);
  return (
    <Layout>
      <div className="content">
        <ImageSlider />

        <section className="popular-cause-area section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>
                    <span>Popular</span> Causes
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {donate_items.map((item, index) => (
                <DonateCard item={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Donate;
