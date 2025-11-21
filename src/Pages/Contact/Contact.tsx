import { useEffect, useState } from "react";
import contact from "../../assets/undraw_group-chat_4xw0.svg";

const Contact = () => {
    
    type AboutType = { contact?: { email?: string; phone?: string; address?: string } } | null

    const [about, setAbout] = useState<AboutType>(null)
    useEffect(()=>{
        fetch("/about.json")
            .then(res => res.json())
            .then(data => setAbout(data.about))
    },[])
    console.log(about?.contact);
    const email : string = about?.contact?.email ?? ""
    const phone: string = about?.contact?.phone ?? ""
    const address : string = about?.contact?.address ?? ""
    console.log(email, phone, address);

  return (
    <div className="my-20">
      <div className="text-center mt-10">
        <h2 className="text-6xl font-semibold">if need</h2>
        <p className="text-4xl font-medium">Contact with us</p>
        <div className="w-5/12 lg:w-3/12 mx-auto mt-10">
          <img className="w-full" src={contact} alt="" />
        </div>
      </div>
      <div>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
