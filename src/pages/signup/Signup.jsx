import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import SignupForm from "../../components/SignupForm/SignupForm.jsx";

export default function Signup() {
    return (
        <>
            <Helmet>
                <title>Signup</title>
            </Helmet>

            {/* Header Banner */}
            <Hero pageName={"Sign Up"} breadcrumb={"Sign Up"} />

             Card Form
            <SignupForm />
        </>
    );
}
