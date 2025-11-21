import { useEffect, useState } from "react";
import contact from "../../assets/undraw_group-chat_4xw0.svg";
import { AtSign, MapPinHouse, Phone } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  type AboutType = {
    contact?: { email?: string; phone?: string; address?: string };
  } | null;

  const [about, setAbout] = useState<AboutType>(null);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data.about));
  }, []);

  const email: string = about?.contact?.email ?? "";
  const phone: string = about?.contact?.phone ?? "";
  const address: string = about?.contact?.address ?? "";

  //   this is for submission
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmit(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to send this massage!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4f00",
      cancelButtonColor: "#6f6e72",
      confirmButtonText: "Send",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Submitted!",
          text: "Your massage has been deleted.",
          icon: "success",
          timer: 1500
        });
      }
    });
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="text-center mt-10">
        <h2 className="text-6xl font-semibold pt-10">if need</h2>
        <p className="text-4xl font-medium">Contact with us</p>
        <div className="w-5/12 lg:w-3/12 mx-auto mt-10">
          <img className="w-full" src={contact} alt="" />
        </div>
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center max-w-[1200px] mx-auto rounded-2xl overflow-hidden">
        <div className="bg-gray-300 w-full md:w-4/12 p-10">
          <ul className="space-y-6">
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
        <div className="bg-[#2a3544] w-full md:w-8/12 p-10">
        <h2 className="text-xl text-white font-medium mb-5">Send Massage</h2>
          <form onSubmit={handleSubmit} action="" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* this is first name section */}
            <div>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input type="text" required placeholder="first name" />
              </label>
            </div>

            {/* this is last name */}
            <div>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input type="text" required placeholder="last name" />
              </label>
            </div>

            {/* this is email section */}
            <div>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>

            {/* this is phone section */}
            <div>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill="none">
                    <path
                      d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <input type="tel" className="tabular-nums" placeholder="phone" required />
              </label>
            </div>
            {/* this is text area */}
            <textarea
              className="textarea w-full md:col-span-2 resize-none h-40"
              placeholder="What you want to know..."
            ></textarea>
            <input
              type="submit"
              value="Send"
              className={`btn border-0 rounded-md bg-[#ff4f00] text-white col-span-2`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
