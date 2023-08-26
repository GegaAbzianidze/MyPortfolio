import ArticlesCard from "./ArticlesCard";

const ArticlesData = [
  {
    title: "How to use Haversine formula in React Native.",
    mediumLink: "https://medium.com/@gega.abzianidze.1/haversine-formula-in-react-native-abda04843888",
    hashTags: ["React Native", "Haversine", "JS"],
    likes: 45,
    comments: 1,
    publishedAt: "2023-02-20",
  },
  {
    title: "How Junior ReactJS Developers Can Write Production-Ready and Clean Code",
    mediumLink: "https://medium.com/@gega.abzianidze.1/how-junior-reactjs-developers-can-write-production-ready-and-clean-code-cdecf76e5136",
    hashTags: ["Junior Developer", "Reactjs", "First Steps"],
    likes: 0,
    comments: 0,
    publishedAt: "2023-08-26",
  },
  {
    title: "Capture drivers location path React Native",
    mediumLink: "https://medium.com/@gega.abzianidze.1/track-driver-location-react-native-795abad38d5f",
    hashTags: ["React Native", "Geolocation", "Tracking"],
    likes: 0,
    comments: 0,
    publishedAt: "2023-02-23",
  },
];

const Articles = () => {
  return (
    <div id="projects">
      <h1 className="text-center text-3xl py-8 mb-7 uppercase">
        Articles I&apos;ve Written
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {ArticlesData?.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-lg p-5">
            <ArticlesCard project={project} />
          </div>
        ))}
      </div>
      <hr className="my-4 md:hidden"/>
    </div>
  );
};

export default Articles;
