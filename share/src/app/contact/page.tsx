import { Metadata } from "next";
import Banner from "../ui/banner";
//import bannerImg from "../../../public/images/banner2.jpg";
import styles from "@/app/ui/contacts/contacts.module.css"; // Ensure this path matches your project structure
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact',
};

export default function Page() {
    return (
        <main>
            
            <div className={styles.contactPage}>
                <h2>Get In Touch With Us</h2>
               
                <form className={styles.contactForm}>
                    <fieldset className={styles.contactFieldset}>
                        <label htmlFor="firstName">First Name: *</label>
                        <input type="text" id="firstName" name="firstName" required />
                        <label htmlFor="lastName">Last Name: *</label>
                        <input type="text" id="lastName" name="lastName" required />
                        <label htmlFor="contactEmail">Email: *</label>
                        <input type="email" id="contactEmail" name="contactEmail" placeholder="johndoe@gmail.com" required />
                        <label htmlFor="concern">Subject: *</label>
                        <textarea id="concern" name="concern" rows={10} required />
                    </fieldset>
                    <Link href="/success" passHref>
                        <button type="submit" className={styles.contactFormButton}>Submit</button>
                    </Link>
                </form>
            </div>
        </main>
    );
}
