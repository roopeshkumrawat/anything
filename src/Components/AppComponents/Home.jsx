import sendImg from '../../images/send.png';
import leftQuotes from '../../images/letfQuotes.png';
import rightQuotes from '../../images/rightQuotes.png';
import styles from './Home.module.css';
function Home() {
    return (
        <div className={styles.homeMain}>
            <div className="container">
                <div className={styles.homeInner}>
                    <h1 className={styles.mainHeading}>Ask anything...</h1>
                    <div className={styles.inputField}>
                        <textarea className={styles.inputTextField}></textarea>
                        <img className={styles.sendImg} src={sendImg} alt="sendImg" />
                    </div>
                    <div className={`${styles.demoQueMain} d-flex`}>
                        <div className={`${styles.leftQuotes} ${styles.quotesImg}`}><img className='w-100' src={leftQuotes} alt="leftQuotes" /></div>
                        <div className={styles.demoQueInner}>
                            <p className={styles.ques}>Create an itinerary for a ten day vacation Italy....</p>
                            <p className={styles.ques}>Write out a meal plan for someone lactose intolerant...</p>
                            <p className={styles.ques}>Create a witty social media caption for this photo....</p>
                        </div>
                        <div className={`${styles.rightQuotes} ${styles.quotesImg}`}><img className='w-100' src={rightQuotes} alt="rightQuotes" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;