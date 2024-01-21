const Why = () => {
  return (
    <section className="relative py-16">
      <div className="container grid md:grid-cols-2 !pr-0 md:!px-[2.5rem]">
        <header className="mb-8 text-center flow-content--m md:mb-0 md:text-left">
          <h2 className="text-3xl font-semibold text-secondary">
            What's different about Manage?
          </h2>
          <p className="max-w-[450px] text-[#9095a7] text-lg font-medium mx-auto md:mx-0">
            {" "}
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </header>
        <div className="why__contents flow-content--xl">
          <div className="why__item flow-content--m">
            <header className="">
              <h4 className="text-xl text-[#242d52] font-semibold md:bg-white bg-[#fff0eb] w-full flex items-center gap-4">
                <span className="px-8 py-2 text-xl text-white rounded-full num bg-primary">
                  01
                </span>
                Track company-wide progress
              </h4>
            </header>
            <p className="text-[#9095a7] text-lg font-medium mx-auto md:mx-0 md:pl-24">
              {" "}
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.{" "}
            </p>
          </div>
          <div className="why__item flow-content--m">
            <header className="">
              <h4 className="text-xl text-[#242d52] font-semibold flex items-center gap-4  md:bg-white bg-[#fff0eb] w-full">
                <span className="px-8 py-2 text-xl text-white rounded-full num bg-primary">
                  02
                </span>
                Advanced built-in reports
              </h4>
            </header>
            <p className="text-[#9095a7] text-lg font-medium mx-auto md:mx-0 md:pl-24">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="why__item flow-content--m">
            <header className="">
              <h4 className="text-xl text-[#242d52] font-semibold flex items-center gap-4 md:bg-white bg-[#fff0eb] w-full">
                <span className="px-8 py-2 text-xl text-white rounded-full num bg-primary">
                  03
                </span>
                Everything you need in one place
              </h4>
            </header>
            <p className="text-[#9095a7] text-lg font-medium mx-auto md:mx-0 md:pl-24">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
