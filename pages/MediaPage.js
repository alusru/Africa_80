import Layout from "../components/Layout";
import Blog from "../components/blog";
import Search from "../components/search";
import FeaturedPost from "../components/featuredPost";
import NewsLetter from "../components/newsletter/Newsletter";
import ImageSlider from "../components/mini_slider";

const MediaPage = () => {
  return (
    <Layout>
      <ImageSlider />
      <section className="blog_area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <Search />

                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  <FeaturedPost />
                  <FeaturedPost />
                  <FeaturedPost />
                  <FeaturedPost />
                  <FeaturedPost />
                </aside>
                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <NewsLetter />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaPage;
