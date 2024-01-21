import tabletBg from "../assets/bg-tablet-pattern.svg";
import Slider from "./Slider";
const Testimonial = () => {
  return (
    <section className="relative py-16">
      <img
        src={tabletBg}
        alt="tablet background image"
        className="absolute top-[-200px] left-[-500px] z-[-1]"
      />
      <div className="container">
        <header className="mb-32">
          <h2 className="text-3xl font-semibold text-center text-secondary">
            What they've said
          </h2>
        </header>
        <Slider />
        <div className="flex justify-center btn-wrapper">
          <a className="btn btn--primary">get started</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
