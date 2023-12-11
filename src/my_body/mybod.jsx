import React, {useState} from 'react';
import classes from "./mybody.module.css";

const Mybod = () => {
    const [image, setImage] = useState(null);

    function inmFunq(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }





    return (
        <div className={classes.chiefDiv}>
            <div className={classes.BODIimg}>


                <div>
                    <h2>choose your image</h2>

                    <input className={classes.IimgInput} onChange={(event) => inmFunq(event)} type="file"/>
                    {
                        image && <img src={image} alt=""/>
                    }
                </div>


            </div>

            <div className={classes.my_info}>
                <h2>Հարությունյան Մերուժան</h2>

                <ul>


                    <li>web development</li>
                    <li>hmeruzh9@gmail.com</li>
                    <li>(+374)33-10-10-48</li>

                </ul>
                <ul>

                    <li><a href="https://github.com/MGHarutyunyan?tab=repositories">Github</a></li>
                    <li>linkedin</li>
                </ul>
            </div>


        </div>
    );
};

export default Mybod;