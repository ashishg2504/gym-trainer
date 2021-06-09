import styles from "../../StyleSheets/Trainers/trainers.module.css"
import gympic from "../../Assets/Image/gym_2x-removebg-preview.png"
import star from "../../Assets/Image/Union 6.png"
import shivam from "../../Assets/Image/27545272_828254984033055_838798072028865159_n-removebg-preview.png"
const Trainers = () =>{
    return(
        <div className={styles["trainers"]}>
            <div className={styles["heading"]}>
            <h1>Trainers</h1>
            <p>Select your trainer as per your choice</p>
            <img src={gympic}/>
            </div>
            <div className={styles["filter-section"]}>
                <h1>Filter out</h1>
                <div className={styles["filter-box-1"]}>
                    <div className={styles["filter-box-field"]}>
                    <label>
                        Name
                    </label>
                    <input type="text"/>
                    </div>
                    <div className={styles["filter-box-field"]}>
                    <label>
                        Gender
                    </label>
                    <div className={styles["filter-radio"]}>
                    <label for="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="female">Female</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    </div>
                    </div>
                    <div className={styles["filter-box-field"]}>
                    <label>
                        Age
                    </label>
                    <input type="text" style={{width: "5em"}}/>
                    </div>
                </div>
                <div className={styles["filter-box-2"]}>
                <div className={styles["filter-box-field"]}>
                    <label>
                        Language
                    </label>
                    <input type="text"/>
                    </div>
                    <div className={styles["filter-box-field"]}>
                    <label>
                        Experience in Year
                    </label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    </div>
                    <div className={styles["filter-box-field"]}>
                    <label>
                        Number of Client
                    </label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    </div>
                </div>
                <div className={styles["filter-box-3"]}>
                    <label>Price Range</label>
                    <hr></hr>
                </div>
                <hr></hr>
            </div>
            <div className={styles["popular-trainer"]}>
                    <div className={styles["trainer-profile"]}>
                        <p className={styles["ad-heading"]}>Ad</p>
                        <h2>Shivam</h2>
                        <img src={star} />
                        <h2>5</h2>
                        <p>Price-1999/-</p>
                        <div className={styles["discount-banner"]}>
                            <h2>50% OFF</h2>
                        </div>
                        <img src={shivam} className={styles["trainer-pic"]}/>
                    </div>
                    <div className={styles["trainer-profile"]}>
                    <div className={styles["trainer-profile"]}>
                        <p className={styles["ad-heading"]}>Ad</p>
                        <h2>Shivam</h2>
                        <img src={star} />
                        <h2>5</h2>
                        <p>Price-1999/-</p>
                        <div className={styles["discount-banner"]}>
                            <h2>50% OFF</h2>
                        </div>
                        <img src={shivam} className={styles["trainer-pic"]}/>
                    </div>
                    </div>
                    <div className={styles["trainer-profile"]}>
                    <div className={styles["trainer-profile"]}>
                        <p className={styles["ad-heading"]}>Ad</p>
                        <h2>Shivam</h2>
                        <img src={star} />
                        <h2>5</h2>
                        <p>Price-1999/-</p>
                        <div className={styles["discount-banner"]}>
                            <h2>50% OFF</h2>
                        </div>
                        <img src={shivam} className={styles["trainer-pic"]}/>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Trainers