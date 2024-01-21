import tabletBg from "../assets/bg-simplify-section-desktop.svg";
const Simplify = () => {
  return (
    <section className="w-full py-16 bg-no-repeat md:bg-cover md:bg-center bg-primary md:bg-simplifyBgDesktop bg-simplifyBgMobile">
      <div className="container grid items-center text-center md:text-left md:justify-between md:grid-cols-2 ">
        <header className="mb-4 md:mb-0">
          <h2 className="text-5xl font-bold text-white">
            Simplify how your team
            <br /> works today.
          </h2>
        </header>
        <div className="btn-wrapper md:justify-self-end">
          <div className="btn btn--secondary">get started</div>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
