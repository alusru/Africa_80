import Layout from "../components/Layout";
import Mini from "../components/mini_slider";
import MainEvent from "../components/Events/eventParent";
import Subscribe from "../components/contact/subscribe";

const EventsPage = () => {
  return (
    <Layout>
      <div className="content">
        <Mini />
        <MainEvent />
        <Subscribe />
      </div>
    </Layout>
  );
};

export default EventsPage;
