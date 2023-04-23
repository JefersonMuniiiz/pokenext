import Image from "next/image";
import styles from "../styles/About.module.css"


export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>loremQuis dolore sunt ad aliquip adipisicing proident proident Lorem amet nostrud quis. 
                Laboris ipsum dolorexcepteur nulla. Aliquip nostrud est ullamco velit pariatur sit irure 
                ex ea aliqua voluptate ex. Ex dolore dolore tempor ut sit nisi do sunt aute Lorem esse sit officia.
            </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}