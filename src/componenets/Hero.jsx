import heroImg from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="py-16 md:py-8">
      <div className="container grid items-center md:grid-cols-2">
        <header
          className="text-center flow-content--m md:text-left"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h1 className="text-6xl font-semibold text-secondary">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-[450px] text-[#9095a7] text-lg font-medium mx-auto md:mx-0">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.{" "}
          </p>
          <a href="" className="btn btn--primary">
            get started
          </a>
        </header>
        <div
          className="hero__img-wrapper order-[-1] md:order-[0]"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <img src={heroImg} alt="hero image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
