
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import AddTeacher from "../../components/AddTeacher/AddTeacher";



export default function NewTeacher() {
    return (
        <>
            <Helmet>
                <title>Add New Trainer</title>
            </Helmet>

            <Hero
                pageName={"Add New Trainer"}
                breadcrumb={"Add New Trainer"}
            />


            <AddTeacher />
        </>
    );
}