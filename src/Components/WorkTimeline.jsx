const WorkTimeline = () => {
  return (
    <div  className="bg-[#1a1a1a] mt-4">
      <h1 className="text-center text-3xl py-8 mb-7 uppercase">
        Work Timeline
      </h1>
      <section>
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-white">
                <h3 className="text-3xl font-semibold">
                  Topwork.ge Internship
                </h3>
                <span className="text-sm font-bold tracking uppercase dark:text-gray-400">
                  April 2023 - June 2023
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
                  <h3 className="text-xl font-semibold tracking">
                    Freelance Work on Upwork
                  </h3>
                  <time className="text-xs tracking uppercase dark:text-gray-400">
                    January 2022 - December 2022
                  </time>
                  <p className="mt-3">
                    Engaged in diverse freelance projects on Upwork, delivering
                    high-quality services and consistently achieving exceptional
                    results for clients. Projects encompassed code correction
                    and assisting fellow coders in overcoming challenging tasks.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
                  <h3 className="text-xl font-semibold tracking">
                    Topwork.ge Internship
                  </h3>
                  <time className="text-xs tracking uppercase dark:text-gray-400">
                    April 2023 - June 2023
                  </time>
                  <p className="mt-3">
                    Interned at Topwork.ge, gaining valuable experience in
                    working on production projects and collaborating with
                    cross-functional teams. Contributed actively to front-end
                    development tasks, ensuring seamless project delivery and
                    successful achievement of objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkTimeline;
