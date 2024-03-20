"use client";
import { Grid } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    question: "Your Contact information",
    answer: "Ut enim ad minim veniam quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "What your Package Includes",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
  {
    question: "Do you offer customize tours",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
  {
    question: "Do you offer couples specials discounts?",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
  {
    question: "What are the expected dates?",
    answer:
      "Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes Embark on a journey to unforgettable destinations, where breath taking landscapes",
  },
];

function CommissionAndIncentive() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Grid container mt={3}>
        <Grid item xs={12} md={12}>
          <h1 className="text-3xl font-semibold md:font-medium md:text-xl ">Frequent Asked Question</h1>
        </Grid>
      </Grid>

      <div className="font-mont">
        <div className="w-full my-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index
                  ? "bg-white border-white  shadow-4xl "
                  : "bg-[#FBFBFB] border-gray-200"
              } rounded-md mb-4`}
            >
              <button
                className="w-full flex justify-between items-center p-4 focus:outline-none"
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
                  className={`transform px-4 pt-0 pb-6 grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? " grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 "
                  }`}
                >
                  <p className="text-[#6F6C90] text-xs ">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default CommissionAndIncentive;
