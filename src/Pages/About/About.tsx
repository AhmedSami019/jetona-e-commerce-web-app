import { useEffect, useState } from "react";
import service from "../../assets/service-24-7-concept-illustration_114360-7380.webp";

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

  const { founded, founder, headquarters, mission, vision, history, awards } =
    about;
  console.log(awards);

  return isDataLoaded === false ? (
    <p>data is loading</p>
  ) : (
    <>
      <div className="mt-20 w-11/12 mx-auto space-y-2.5">
        {/* about section */}
        <div className="pt-10  space-y-3.5">
          <h2 className="text-5xl font-semibold">
            About <span className="text-[#ff4f00]">jeTona</span>
          </h2>
          <p className="lg:w-5/12 text-xl text-gray-700">{mission}</p>
          <p className="text-3xl font-medium italic">Founded in {founded}</p>
          <p className="text-lg lg:w-6/12">
            <span className="font-bold">History:</span> {history}
          </p>
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
          <div className="lg:w-6/12">
            <img className="lg:w-8/12" src={service} alt="image is coming" />
          </div>
        </div>

{/* founder section */}
<div>
    <div>
        <img src="" alt="" />
    </div>
    <div></div>
</div>

        {/* award section */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between gap-5 mt-10">
          <div>
            <h2 className="text-5xl font-semibold">Our Awards</h2>
            <p>
              {awards.map((award, index) => (
                <p
                  className="text-2xl font-medium italic mt-4 underline"
                  key={index}
                >
                  {award}
                </p>
              ))}
            </p>
          </div>
          <div className="text-start lg:w-6/12">
            <h2 className="text-5xl font-semibold">Contact</h2>
            {

            }
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
