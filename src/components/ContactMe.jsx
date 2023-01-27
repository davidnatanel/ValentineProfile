import style from './ContactMe.module.css'
import { BsInstagram ,BsLinkedin} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';

const ContactMe=()=>{
    return (
    <div id="ContactMe" className={style.container}>
        <ul>
            <li> <a href='https://www.instagram.com/valen_design9/' target={'_blank'}><BsInstagram /></a> </li>
            <li> <a href='https://www.linkedin.com/in/valentina-roel-copa/' target={'_blank'}><BsLinkedin /></a> </li>

        </ul>

    </div>
    )
}
export default ContactMe