import styles from "./About.module.css";

export const metadata = {
  title: "1st Project With Next.Js | About Page",
  description: "This is website About page",
};
const About = () => {
  return (
    <div>
      <h1 className={`font-bold text-3xl ${styles.heading}`}>About Us</h1>
    </div>
  );
};

export default About;
