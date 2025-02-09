import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "1st Project With Next.Js | Home Page",
  description: "This is website home page",
};
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.Js Home Page</h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
