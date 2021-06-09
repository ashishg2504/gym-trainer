import styles from "../../StyleSheets/Home/Home.module.css";
import paleingym from "../../Assets/Image/pale-in-the-gym.png";
import addidas from "../../Assets/Image/adidas.png";
import nike from "../../Assets/Image/nike.png";
import bodybuilder1 from "../../Assets/Image/bodybuilder1.png";
import bodybuilder2 from "../../Assets/Image/bodybuilder2.png";
import flames from "../../Assets/Image/flame-1237.png";
import clipwaiting from "../../Assets/Image/clip-waiting.png";
import Carousel from "react-elastic-carousel";
import star from "../../Assets/Image/Union 6.png";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1100, itemsToShow: 3 },
  ];
  return (
    <>
      <div className={styles.home}>
        <div>
          <img src={paleingym} className={styles["pale-in-gym"]} />
        </div>
        <section className={styles["trial-section"]}>
          <div className={styles["trial-content"]}>
            <h1>
              World's Best<br></br>Certified Trainers <br></br>In you Pocket
            </h1>
            <p>Get 7 Days trial Free</p>
            <a href="#">
              <button className={styles["button-1"]}>Try For Free</button>
            </a>
            <a href="#">
              <button>How its work</button>
            </a>
          </div>
        </section>
        <section className={styles["sponsor-section"]}>
          <div className={styles["sponsor-content"]}>
            <hr></hr>
            <h1>
              Trusted by individuals and teams at the world's best companies
            </h1>
            <div className={styles["sponsor-image"]}>
            <img src={addidas} alt="addidas logo"></img>
            <img src={nike} alt="nike logo"></img>
            </div>
          </div>
        </section>
        <section className={styles["trial-section-box"]}>
          <div className={styles["trial-content-box"]}>
            <div className={styles["trial-box-1"]}>
              <h1>
                Try Best <br></br>Certified Trainers
              </h1>
              <p>For Weight Loss ,Exercise, Diet Plan...</p>
              <a href="#">
                <button className={styles["blue-button"]}>Try For Free</button>
              </a>
            </div>
            <div className={styles["trial-box-2"]}>
              <img src={bodybuilder1} alt="bodybuilder image"></img>
            </div>
          </div>
        </section>
        <section className={styles["track-record"]}>
          <div className={styles["track-content"]}>
            <div className={styles["image-box"]}>
              <img src={bodybuilder2} alt="bodybuilder image"></img>
            </div>
            <div className={styles["text-box"]}>
              <h1 className={styles["grey-h1"]}>Track Records</h1>
              <h1>
                Track Your Progress<br></br> on Daily Basis
              </h1>
              <p>
                You can track your exercise count,<br></br>Steps & Calorie
                Count. You have to <br></br>permission share your progress to
                your trainee or not
              </p>
              <a href="#">
                <button className={styles["blue-button"]}>Lets Start</button>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["chat-box"]}>
          <div className={styles["chat-content"]}>
            <div className={styles["text-box"]}>
              <h1 className={styles["grey-h1"]}>Chat Support</h1>
              <h1>
                Talk to your trainee<br></br>anytime
              </h1>
              <p>
                You can chat or Video call with trainee <br></br>anytime that
                you fix or you can call trainee<br></br>in case emergency or for
                motivation
              </p>
              <a href="#">
                <button className={styles["blue-button"]}>Lets Start</button>
              </a>
            </div>
            <div className={styles["image-box"]}>
              <img src={flames} alt="chat support"></img>
            </div>
          </div>
        </section>
        <section className={styles["training-section"]}>
          <div className={styles["training-content"]}>
            <div className={styles["training-image"]}>
              <img src={clipwaiting} />
              <div className={styles["text-1"]}>
                <h1>
                  Start Training <br></br>in just 3 Steps
                </h1>
                <p>Easy & Fast</p>
                <a href="#">
                  <button className={styles["blue-button"]}>Lets Start</button>
                </a>
              </div>
            </div>
            <div className={styles["training-text"]}>
              <h1>Step 1</h1>
              <p>SignUp Or Login Into our app or site</p>
              <h1>Step 2</h1>
              <p>
                Select Trainer on basis of certification,<br></br>experience,
                gender, age, language etc.
              </p>
              <h1>Step 3</h1>
              <p>Enroll & Start your training </p>
            </div>
          </div>
        </section>
        <section className={styles["testimonal-section"]}>
          <div className={styles["testimonal-content"]}>
            <Carousel breakPoints={breakPoints}>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
              <div className={styles["review-box"]}>
                <h1>
                  "This product is so cool <br></br>and create so much value{" "}
                  <br></br>bla bla bla bla"
                </h1>
                <img src={star} />
                <h3>Sahil Verma</h3>
                <p>CTO of GymTrainer</p>
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
