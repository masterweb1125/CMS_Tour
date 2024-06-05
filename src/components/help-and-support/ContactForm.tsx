import Image from "next/image";
import {
  HelpAndSupport,
  CustomerServiceFemale,
  TestimonialAvatar,
  CustomTourCover,
  TropicaIcon,
  LocationIcon,
} from "@/src/utils/images/images";
import { useState } from "react";
import toast from "react-hot-toast";
import { API_DOMAIN } from "@/src/redux/service/APIs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const icons = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const aboutOptions = [
  {
    id: "1",
    name: "Info@Buyboxsavvy.com",
    description: "Need support Drop us Email",
    icon: LocationIcon,
  },
  {
    id: "2",
    name: "44 (0) 1582 551 550",
    description: "Have a Question Call Us ?",
    icon: LocationIcon,
  },
  {
    id: "3",
    name: "Rousch Power Plant Abdul Hakim District ",
    description: "",
    icon: TropicaIcon,
  },
];

export default function ContactForm() {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSendMsgQuery = async (e: any) => {
    e.preventDefault();
    if (!data?.firstName || !data?.lastName || !data?.email || !data?.message) {
       toast.error("Form fields shouldn't empty", {
         style: { width: "auto", height: "auto" },
         duration: 3000,
       });
      
      return;
    }
    console.log("contact us form is: ", data);
    
    try {
    setloading(true);

      const res = await API_DOMAIN.post("api/v1/tour/contactUs", {
        firstName: data.firstName,
        lastName: data.lastName,
        senderEmail: data.email,
        message: data.message
      });

      setData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
   toast.success("User Query sent successfully", {
     style: { width: "auto", height: "auto" },
     duration: 3000,
   });
    setloading(false);
      
} catch (error) {
      console.log("sending query failed: ", error);
       toast.error("Sending an user query failed", {
         style: { width: "auto", height: "auto" },
         duration: 3000,
       });
    setloading(false);
      
}

  };

  return (
    <div className="my-16 max-w-[1220px] mx-auto px-2">
      <div className="flex items-start flex-col md:flex-row">
        <div className="px-4 sm:px-6 lg:px-8 bg-[#232F3F] md:w-1/2 text-white rounded-xl py-[64px] self-stretch">
          <div>
            <Image src={TropicaIcon} alt="" width={126} height={36} />
          </div>
          <div className="flex flex-col gap-6 py-6 border-t-2 border-b-2 my-6 border-gray-500">
            {aboutOptions.map((o) => (
              <div className="flex gap-4" key={o.id}>
                <div className="w-12 h-12 rounded-md border-2 border-[#ADADAD] flex items-center justify-center">
                  <Image src={o.icon} alt="" className="h-6 w-6" />
                </div>
                <div className="max-w-lg">
                  <p className="text-lg">{o.name}</p>
                  <p className="text-sm">{o.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Social Media Links</h3>

            <div className="flex space-x-4 mt-4">
              {icons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 bg-white rounded-full p-2"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          className="md:w-1/2 space-y-8 max-w-5xl px-4 py-2 sm:px-6 lg:px-8 w-full"
          onSubmit={handleSendMsgQuery}
        >
          <div className="space-y-8 divide-y divide-gray-200 w-full">
            <div className="">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold max-w-xl tracking-tight mt-4 md:mt-0">
                  Contact us
                </h1>
                <p className="text-gray-900 mt-2 mb-2 lg:mb-4">
                  Our friendly team would love to hear from you.
                </p>
              </div>
              <div className="mt-2 grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-6 pt-4 w-full">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm text-gray-800"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      placeholder="First name"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-first sm:text-sm border-gray-200 border-2 rounded-md p-3 w-full"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm text-gray-800"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-last sm:text-sm border-gray-200 border-2 rounded-md p-3 w-full"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-800"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      value={data.email}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-200 border-2 rounded-md p-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-800"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      rows={3}
                      value={data.message}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-200 border-2 rounded-md p-3"
                    />
                  </div>
                </div>

                <div className="relative flex items-start sm:col-span-6">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded-xl"
                    />
                  </div>
                  <div className="ml-3 leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      You agree to our friendly privacy policy.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-end">
              <button
                type="submit"
                className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-semibold rounded-md ${" text-white bg-[#FFA500] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"}`}
              >
                {loading ? (
                  <div className="px-12  loading animate-spin text-[1.5rem">
                    <AiOutlineLoading3Quarters />
                  </div>
                ) : "Send message"}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
