/* Imports
*/
    // types
    import { SocialButtonsProps } from "@/types/components/HeroSection/SocialButtons/SocialButtons";

    // components
    import { CustomButton } from "@/components/Global/CustomButton"

    // icons
    import { FaWhatsapp } from "react-icons/fa";
    import { FaInstagram } from "react-icons/fa";
    import { CiLinkedin } from "react-icons/ci";
    import { CiMail } from "react-icons/ci";
    import { FaGithub } from "react-icons/fa";
    
    // styles
    import styles from './SocialButtons.module.scss'


// SocialButtons component
export function SocialButtons( { ghVisible }: SocialButtonsProps ){
    return(
        <div className={styles.SocialButtonsList}>
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <CustomButton 
                            variant="justIcon" 
                            icon={<FaWhatsapp />} 
                        />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <CustomButton 
                            variant="justIcon" 
                            icon={<FaInstagram />} 
                        />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <CustomButton 
                            variant="justIcon" 
                            icon={<CiLinkedin />} 
                        />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <CustomButton 
                            variant="justIcon" 
                            icon={<CiMail />} 
                        />
                    </a>
                </li>
                { ghVisible && (
                    <li>
                        <a href="#" target="_blank">
                            <CustomButton 
                                variant="justIcon" 
                                icon={<FaGithub />} 
                            />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}