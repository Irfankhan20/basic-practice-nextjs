import styles from "./Services.module.css";

export const metadata = {
  title: "1st Project With Next.Js | Services Page",
  description: "This is website services page",
};
const Services = () => {
  return (
    <div>
      <h1 className={`font-bold text-3xl ${styles.heading}`}>Services</h1>
    </div>
  );
};

export default Services;
