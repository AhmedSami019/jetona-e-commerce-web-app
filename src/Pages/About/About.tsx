import { useEffect, useState } from "react";
import service from "../../assets/service-24-7-concept-illustration_114360-7380.webp";
import founderImg from "../../assets/464619541_865480199005121_9009118941012390343_n.jpg";
import { AtSign, MapPinHouse, Medal, Phone } from "lucide-react";

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
  // this is for contact area
  const email: string = about?.contact?.email ?? "";
  const phone: string = about?.contact?.phone ?? "";
  const address: string = about?.contact?.address ?? "";

  return isDataLoaded === false ? (
    <span className="loading loading-dots loading-xl mx-auto"></span>
  ) : (
    <>
      <div className="mt-20 w-11/12 mx-auto my-10 space-y-2.5">
        {/* about section */}
        <div className="pt-10 flex flex-col lg:flex-row gap-5 justify-between bg-gray-200 px-5 py-20 rounded-xl">
          <div className="space-y-20 lg:w-6/12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold">
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
            <h2 className="text-4xl md:text-5xl text-center font-semibold">
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
            <h2 className="text-4xl md:text-5xl font-semibold">Our mission and vision</h2>

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

        {/* questions and ans section */}
        <div className="mt-10 space-y-5">
          {/* acrodion title */}
          <h2 className="text-4xl md:text-5xl text-start md:text-center font-semibold">Q&A section</h2>

          {/* acrodion */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              How long does shipping take?
            </div>
            <div className="collapse-content text-sm">
              Standard shipping takes 3–5 business days, while express delivery takes 1–2 business days. You will receive a tracking link once your order ships.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              Do you offer international shipping?
            </div>
            <div className="collapse-content text-sm">
              Yes, we ship to most countries worldwide. International delivery usually takes 7–15 business days depending on your location.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-sm">
              We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay, and Cash on Delivery (available in selected regions).
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              What is your return policy?
            </div>
            <div className="collapse-content text-sm">
              You can return any product within 30 days of purchase if the item is unused and in original packaging.
            </div>
          </div>
        </div>

        {/* award section */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between gap-5 mt-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold">Our Awards</h2>
            <div>
              {awards.map((award, index) => (
                <p
                  className="text-2xl font-medium italic mt-4 flex items-center gap-4"
                  key={index}
                >
                  <Medal></Medal>
                  {award}
                </p>
              ))}
            </div>
          </div>
          <div className="text-start lg:w-6/12">
            <h2 className="text-4xl md:text-5xl font-semibold">Contact</h2>
            <ul className="space-y-4 mt-5">
              <li className="flex gap-2 items-center text-black">
                <AtSign></AtSign>
                {email}
              </li>
              <li className="flex gap-2 items-center text-black">
                <Phone></Phone>
                {phone}
              </li>
              <li className="flex gap-2 items-center text-black">
                <MapPinHouse></MapPinHouse>
                {address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
