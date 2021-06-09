import styles from "../../StyleSheets/About Us/aboutus.module.css"
import people from "../../Assets/Image/Teams_illustrations_Full+Res-01-removebg-preview.png"
import femalegym from "../../Assets/Image/fitness-girl-gym-squats-barbell-vector-flat-illustration-82232293-removebg-preview.png"
import dp from "../../Assets/Image/sample dp.png"

const AboutUs = () => {
    return(
        <div className={styles.aboutus}>
            <section className={styles["about-us-section"]}>
                <div className={styles["about-us-content"]}>
                    <h1>About us</h1>
                    <p>Here you can talk about your team and why people should join your company</p>
                    <img src={people} width="500"/>
                </div>
            </section>
            <section className={styles["mission-section"]}>
                <div className={styles["mission-content"]}>
                    <h1>Our Mission</h1>
                    <p>Remember to talk about your mission.<br></br>Why are you building this project?<br></br>Who are you building this for?<br></br>Why do you care so much about solving this problem?Why should people care?</p>
                </div>
            </section>
            <section className={styles["female-fitness-section"]}>
                <div className={styles["female-fitness-content"]}>
                    <h1>We Believe in<br></br>Changing the<br></br> Fitness Market</h1>
                    <img src={femalegym} width="500"/>
                </div>
            </section>
            <section className={styles["team"]}>
        <h1>Team</h1>
        <p>Meet the people behind our magical product</p>
        <div className={styles["team-member"]}>
            <div className={styles["member-1"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Nikhil</h1>
                <h4>Founder & CEO</h4>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
            <div className={styles["member-2"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Sahil Verma</h1>
                <h4>Full stack Developer</h4>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
            <div className={styles["member-3"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Shivam Sharma</h1>
                <h4>Android Developer</h4>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default AboutUs;