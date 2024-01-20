import { Link } from "react-router-dom";

const carouselImages = [
  "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
  "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
  "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
  "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
];

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-lg text-4xl font-bold sm:text-6xl">
          We are changing the way people shop!
        </h1>
        <div className="my-8 max-w-xl text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime
          perspiciatis quis corrupti provident dolore perferendis sapiente
          voluptatem nam quasi.
        </div>
        <div>
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden lg:carousel carousel-center rounded-box p-4 space-x-4 bg-neutral">
        {carouselImages.map(image => {
          return (
            <div key={image} className="carousel-item">
              <img src={image} className="rounded-box" alt="burger" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
