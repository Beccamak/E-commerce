import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './styles.css';
const Authentication = () => {
    return(
        <div className="authentication-container">
        <SignUpForm />
        <SignInForm />
        {/*<button className="button">search</button>*/}
        </div>
    )
}


export default Authentication;