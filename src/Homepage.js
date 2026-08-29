import { Helmet } from "react-helmet-async";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>The Grill | Mediterranean Restaurant in Chicago</title>
        <meta name="description" content="The Grill is a family-owned Mediterranean restaurant in Chicago, serving traditional recipes with a modern twist." />
      </Helmet>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;