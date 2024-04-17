import PopupCard from "./model/popupCard";

const ProjectPage = () => {
  return (
    <>
      <div
        id="project"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PopupCard />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
