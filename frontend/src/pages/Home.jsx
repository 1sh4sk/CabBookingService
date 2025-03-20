import { Footer, GetStarted, Header, Population, Rating, ReviewTemplate, TaxiTemplate, WhyChooseUs } from "../components";

const Home = () => {
    return <div>
        <Header />
        <WhyChooseUs />
        <Population />
        <GetStarted />
        <TaxiTemplate />
        {/* <ReviewTemplate /> */}
        <Rating />
        <Footer />
    </div>;
};
export default Home;
