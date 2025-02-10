import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "1st Project With Next.Js | Home Page",
  description: "This is website home page",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  // console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center underline mb-5 mt-5">
        Welcome to Next.Js Home Page
      </h1>
      <Counter></Counter>
      <h1 className="text-3xl underline font-bold text-center mt-10 mb-5">
        All Shoes:
      </h1>
      <div className="flex justify-center  gap-20">
        {shoes.slice(0, 4).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-info">Buy Now</button>
                <button className="btn btn-outline btn-success">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
