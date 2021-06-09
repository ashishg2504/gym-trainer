import styles from "../../StyleSheets/Sign Up/signup.module.css"
import eclipse from "../../Assets/Image/Ellipse 6.png"

const SignUp = () =>{
    return(
        <div className={styles.signup}>
            <div className={styles["heading-section"]}>
                <h1>Sign Up</h1>
                <p>Start Exploring by joining Us</p>
            </div>
            <div className={styles["sign-up-form"]}>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Full Name" />
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number"/>
                <button type="submit">Sign Up</button>
            </form>
            </div>
            <img src={eclipse} className={styles["eclipse-image"]}/>
        </div>
    )
}


export default SignUp;