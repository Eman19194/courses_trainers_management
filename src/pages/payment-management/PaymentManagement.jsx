
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import Payment from "../../components/Payment/Payment";

export default function PaymentManagement() {
    return (
        <>
            <Helmet>
                <title>Seamless Payment Tracking & Management"</title>
            </Helmet>
            {/* <!-- Header Banner --> */}
            <Hero pageName={"Seamless Payment Tracking & Management"} breadcrumb={"Payment Management"} />

            {/* <!-- ------------------------- --> */}
            <Payment />
        </>
    );
}
