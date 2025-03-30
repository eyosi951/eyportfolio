import react from "react";
import styles from './Contact.module.css';
import {  FaInstagram, FaTelegram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const Contact= ()=>{

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQLXllvt2xhCIp7hIbtDgKMOmhss9kcr5Sd04kq-wmArUJ1S1u9BytbZtl_DgQuW5Fog/exec';

    const handleSubmit = (e) => {
                 const msg= document.getElementById("msg");

      e.preventDefault();
      const form = e.target;
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => { msg.innerHTML= "Message sent successfully!"
            setTimeout( ()=>{
                msg.innerHTML= ""
            }, 5000)
            form.reset();
        })
        .catch((error) => console.error('Error!', error.message));
    };

    return( 
       
    
    <section id="contact" >
   
       <h1>Contact</h1>
       <div className={styles.container}>
            <div className={styles.contactLeft}>
                <h4 className={styles.subTitle}>Feel free to reach out!</h4>
                <p><FaEnvelope size={20}  className={styles.firstIcons} /> eyosi1174@gmail.com</p>
                <p>< FaPhoneAlt size={20}  className={styles.firstIcons} /> +251960957751</p>
                <div className={styles.secondIcons}>

               
                <a href="https://www.instagram.com/eyosi951" target="_blank" ><FaInstagram size={30} color="purple"  /></a>
                <a href="https://t.me/eyosi951" target="_blank"><FaTelegram size={30} color="dodgerblue" /></a>
                <a  href="https://www.linkedin.com/in/eyosias-solomon-690183344" target="_blank" ><FaLinkedin size={30} color="blue"/></a>
                </div>
                
           </div>
           <div className={styles.contactRight} onSubmit={handleSubmit}>
           <form name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your Name" required autoComplete="off" />
            <input type="email" name="Email" placeholder="Your Email" required  autoComplete="off"/>
            <textarea name="Message" rows={6} placeholder="Your Message" autoComplete="off"></textarea>
            <button type="submit">Submit</button>
          </form>
               <span id="msg"  style={{ color: "lightgreen", marginTop: "-40px", fontSize: "16px" }}></span>
           </div>

       </div  >
        <footer>
            <hr />
        <p className={styles.copyRight} >Copyright &#64;Eyosias. Crafted with 💗 </p>
        </footer>
    </section>


    ) 
}