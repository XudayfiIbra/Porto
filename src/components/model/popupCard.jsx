const PopupCard = () => {
  return (
    <>
      <div className="mt-7 flex min-h-screen justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* card 1 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-[#232323] p-4">
                <img
                  className="ml-[5rem] h-[340px] w-[340px] transform rounded transition-transform hover:rotate-3 hover:scale-110"
                  src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  <h2 className="mt-2 text-2xl font-semibold text-[#EBECF3]">
                    Pain.app
                  </h2>
                  <div className="border-b border-white w-1/2 md:w-1/2 mt-2"></div>
                  <svg
                    aria-colspan=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="h-6 w-6 mt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="mt-2 font-mono text-[#0AFF9D]">
                  Flutter - MUI - Python - FastAPI
                </p>
                <p className="mt-2 text-[#EBECF3]">
                  Think Zapier but for paint. Built with a team of four college
                  friends and scaled to  1 billion requests per day. This was a
                  fun one.{" "}
                  <a className="text-[#0AFF9D] hover:underline" href="#">
                    Learn more 
                  </a>
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-[#232323] p-4">
                <img
                  className="ml-[5rem] h-[340px] w-[340px] transform rounded transition-transform hover:rotate-3 hover:scale-110"
                  src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  <h2 className="mt-2 text-2xl font-semibold text-[#EBECF3]">
                    The Canvas Club
                  </h2>
                  <div className="border-b border-white w-1/2 md:w-1/2 mt-2 mr-2"></div>
                  <svg
                    aria-colspan=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="h-6 w-6 mt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="mt-2 font-mono text-[#0AFF9D]">
                  Node - Express - Postgres - Kafka - Redis
                </p>
                <p className="mt-2 text-[#EBECF3]">
                  A social community for painters to connect with others in
                  their community. I handle everything backend (50K monthly
                  active users.{" "}
                  <a className="text-[#0AFF9D] hover:underline" href="#">
                    Learn more 
                  </a>
                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-[#232323] p-4">
                <img
                  className="ml-[5rem] h-[340px] w-[340px] transform rounded transition-transform hover:rotate-3 hover:scale-110"
                  src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  <h2 className="mt-2 text-2xl font-semibold text-[#EBECF3]">
                    BrushWire
                  </h2>
                  <div className="border-b border-white w-1/2 md:w-1/2 mt-2 mr-2"></div>
                  <svg
                    aria-colspan=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="h-6 w-6 mt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="mt-2 font-mono text-[#0AFF9D]">
                  NextJS - Java - Spring - AWS Aurora
                </p>
                <p className="mt-2 text-[#EBECF3]">
                  Think Zapier but for paint. Built with a team of four college
                  friends and scaled to 1 billion requests per day. This was a
                  fun one.{" "}
                  <a className="text-[#0AFF9D] hover:underline" href="#">
                    Learn more 
                  </a>
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-[#232323] p-4">
                <img
                  className="ml-[5rem] h-[340px] w-[340px] transform rounded transition-transform hover:rotate-3 hover:scale-110"
                  src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  <h2 className="mt-2 text-2xl font-semibold text-[#EBECF3]">
                    Paint Reference 4
                  </h2>
                  <div className="border-b border-white w-1/2 md:w-1/2 mt-2 mr-2"></div>
                  <svg
                    aria-colspan=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="h-6 w-6 mt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="mt-2 font-mono text-[#0AFF9D]">
                  Python - FastAPI - SQLAlchemy.
                </p>
                <p className="mt-2 text-[#EBECF3]">
                  I couldn't think of another paint reference app, so here we
                  are. I think you get the idea, right? Use your imagination.{" "}
                  <a className="text-[#0AFF9D] hover:underline" href="#">
                    Learn more 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
