import { useEffect, useState } from "react";
import service from "../../assets/service-24-7-concept-illustration_114360-7380.webp";
import founderImg from "../../assets/464619541_865480199005121_9009118941012390343_n.jpg";

const About = () => {
  const [about, setAbout] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data.about);
        setIsDataLoaded(true);
      });
  }, []);

  const {
    founded,
    founder,
    mission,
    vision,
    history,
    awards = [],
    values = [],
  } = about as any;

  return isDataLoaded === false ? (
    <p>data is loading</p>
  ) : (
    <>
      <div className="mt-20 w-11/12 mx-auto my-10 space-y-2.5">
        {/* about section */}
        <div className="pt-10 flex flex-col lg:flex-row gap-5 justify-between bg-gray-200 px-5 py-20 rounded-xl">
          <div className="space-y-20 lg:w-6/12">
            <div className="space-y-4">
              <h2 className="text-5xl font-semibold">
                About <span className="text-[#ff4f00]">jeTona</span>
              </h2>
              <p className="lg:w-10/12 text-xl text-gray-700">{mission}</p>
            </div>
            <div className="space-y-4">
              <p className="text-3xl font-medium italic">
                Founded in {founded}
              </p>
              <p className="text-lg lg:w-10/12 text-gray-700">
                <span className="font-bold">History:</span> {history}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium italic">Our values</h2>
              <p>
                {values.map((value, index) => (
                  <li key={index} className="ml-10">
                    {value}
                  </li>
                ))}
              </p>
            </div>
          </div>

          <div className="lg:w-6/12 text-center space-y-3 lg:text-start">
            <h2 className="text-5xl text-center font-semibold">
              {founder || "Emtiaz Ahmed Sami"}
            </h2>
            <h2 className="text-2xl text-center text-gray-500 italic">
              The Founder
            </h2>
            <div className="w-8/12 mx-auto flex justify-center">
              <img
                className="h-full rounded-xl"
                src={founderImg}
                alt={founder || ""}
              />
            </div>
          </div>
        </div>
        {/* mission and vision section */}
        <div className=" pt-10 flex flex-col lg:flex-row-reverse justify-between gap-5 mt-10">
          <div className="text-start lg:w-6/12">
            <h2 className="text-5xl font-semibold">Our mission and vision</h2>

            <p className="text-3xl font-medium mt-10 italic">Mission</p>
            <p className=" text-xl text-gray-700">{mission}</p>

            <p className="text-3xl font-medium mt-10 italic">Vision</p>
            <p className=" text-xl text-gray-700">{vision}</p>

            <p></p>
          </div>
          <div className="lg:w-6/12  rounded-xl">
            <img
              className="lg:w-8/12 bg-gray-200 p-5 mx-auto rounded-xl"
              src={service}
              alt="image is coming"
            />
          </div>
        </div>

        {/* award section */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between gap-5 mt-10">
          <div>
            <h2 className="text-5xl font-semibold">Our Awards</h2>
            <div>
              {awards.map((award, index) => (
                <p
                  className="text-2xl font-medium italic mt-4 underline"
                  key={index}
                >
                  {award}
                </p>
              ))}
            </div>
          </div>
          <div className="text-start lg:w-6/12">
            <h2 className="text-5xl font-semibold">Contact</h2>
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
