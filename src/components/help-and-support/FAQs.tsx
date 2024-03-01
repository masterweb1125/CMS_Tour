import Image from "next/image";
import { useState } from "react";
import { FemaleAgent } from "@/src/utils/images/images";
import Client_BrowseForm from "@/src/components/client/browser-form/browse-form.component";

const faqs = [
  {
    question: "What your Package Includes",
    answer: "Stay With Music Night",
  },
  {
    question: "What your Package Includes",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
  {
    question: "What your Package Includes",
    answer: "Security Maintenance",
  },
  {
    question: "What your Package Includes",
    answer: "Stay With Music Night",
  },
  {
    question: "What your Package Includes",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
  {
    question: "What your Package Includes",
    answer: "Security Maintenance",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="bg-sky-100 mx-auto max-w-[1220px] rounded-xl mb-16 px-2">
      <h2 className="text-4xl w-full text-center mx-auto font-bold pt-12 pb-12 text-gray-800">
        Frequently asked Questions
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <div className="">
            <div className="w-full my-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#FBFBFB] shadow-md rounded-md border-b mb-4 border-gray-200 text-base"
                >
                  <button
                    className="w-full  flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <div
                      className={`p-2 rounded-lg h-max w-max ${
                        activeIndex === index ? "bg-[#FFA500]" : "bg-[#FFF8EC]"
                      } `}
                    >
                      <svg
                        className={`fill-black   ${
                          activeIndex === index
                            ? "bg-[#FFA500] fill-white"
                            : "bg-[#FFF8EC]"
                        } `}
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            activeIndex === index && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            activeIndex === index && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <div
                      className={`transform  px-6 pt-0 grid overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? " grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 "
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image src={FemaleAgent} alt="" className="w-full md:w-1/2" />
      </div>
    </div>
  );
}
