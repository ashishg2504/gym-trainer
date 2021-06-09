import styles from "../../StyleSheets/contactus/contactus.module.css"
import path from "../../Assets/Image/Path 18.png"

const ContactUs = () =>{
    return(
        <div className={styles.contactus}>
            <section className={styles["sign-up"]}>
          <div className={styles["section-wrapper"]}
          >
            <div className={styles["image-section"]}>
            <img src={path} />
            </div>
            <div className={styles["sign-up-section"]}>
              <h1>Contact Us</h1>
              <p>
                Explore the future with us <br />
                Feel free to get in touch
                Feel free to get in touch
              </p>
              <div className={styles["sign-up-form"]}>
              <form>
                  <label>Full Name</label>
                  <input type="text" placeholder="full name"/>
                  <label>Phone Number</label>
                  <input type="text" placeholder="phone number"/>
                  <label>Message</label>
                  <input type="text" placeholder="How can we help you?"/>
                  <button type="submit">Join</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default ContactUs;