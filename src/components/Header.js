// import { Link } from "react-router-dom";
import ProfilePicture from "./img/Profile-picture.jpg"

export default function Header(props){

    return(
        <header>
             <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fa39911173ad8fd36f451961c23f504b9%2Ftumblr_of1p3313Al1rldv4go1_1280.gif&f=1&nofb=1&ipt=0bee84832b687b114a5f8b5ee78be70e11c5e37c102491eca4779bafc28e9239&ipo=images" alt="profile" className="header-img"/>

            <div className="profile-image-circle">
                <img src={ProfilePicture} alt="Photo of Milan" className="profile-img"/>
            </div>
            <nav className="nav">
                <section className="animate__animated animate__fadeInDown">    
                    <h1 className="myname">Milan Choudhury</h1>
                    <p className="whoIAm">Professional Designer</p>
                </section>
            </nav>
        </header>
    )

}

