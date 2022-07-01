import Layout from "../components/Layout";
import Form from "../components/contact/";
import ImageSlider from "../components/mini_slider";

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <ImageSlider />
        <Form />
      </div>
    </Layout>
  );
};

export default ContactPage;
