"use client";
import {
  CartTourImage,
  Client01,
  Client02,
  CardTourImage2,
  GroupImage,
} from "@/src/utils/images/images";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";
import { GetTourReviewsByTourId,DateformateMonthNameDateYear} from "@/src/redux/service/AdminApi";

const locations = ["London", "Amsertadam", "Australia", "Asia", "New York"];
const languages = ["English", "French"];

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
];

export default function TourDetailDescription({ tour }) {
  const [reviews, setreviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [age, setAge] = useState("Pickup Location");
  const [language, setLanguage] = useState("English");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const RatingStar = "/images/rating-star.png";

  const fetch = async () => {
    const res = await GetTourReviewsByTourId(tour._id);
    setreviews(res.data);
  };
  useEffect(() => {
    fetch();
    
  }, []);
  return (
    <div className="mt-8 gap-10 md:gap-5 sm:gap-0">
      <Grid
        container
        spacing={3}
        className="flex flex-col-reverse md:flex md:flex-row"
      >
        <Grid item xs={12} md={7}>
          <h2 className="font-bold text-2xl text-black-variant leading-8">
            Tour description
          </h2>
          <p className="pt-4 text-sm md:text-lg text-[#757575] font-mont">
            {tour.description}
          </p>
          <h3 className="pt-5 mt-4 mb-4 font-bold text-2xl text-black-variant leading-8">
            Tour Highlights
          </h3>
          <div className="flex gap-4 md:gap-2 overflow-scroll md:overflow-hidden [&::-webkit-scrollbar]:hidden">
            <Image className="w-64" src={CartTourImage} alt="highligh-01" />
            <Image className="w-64" src={CardTourImage2} alt="highligh-01" />
          </div>
          <p className="pt-2 text-sm md:text-lg text-[#757575] font-mont">
            Embark on a journey to unforgettable destinations, where breath
            taking landscapes meet Embark on a journey to unforgettable
            destinations, Embark on a journey
          </p>
          <div className="">
            <h3 className="pt-5 mt-4 font-bold text-2xl text-black-variant leading-8">
              Includes
            </h3>
            <p className="text-sm md:text-lg text-[#757575] font-mont">
              Experience an unforgettable journey to some of the most
              breathtaking destinations around the world. Our tour package
              includes convenient pick-up and drop-off services to ensure your
              travel is hassle-free. Enjoy a delicious meal each day as part of
              our package, with car parking facilities available for your
              convenience. Attend exclusive music events and stay at the best
              hotels, known for their comfort and hospitality. Your safety is
              our priority, with top-notch security measures in place.
            </p>
            <div className="flex justify-between gap-3 mt-5 pt-3 items-center">
              {tour.whatIncludes.map((item) => (
                <div
                  dangerouslySetInnerHTML={{ __html: item.icons }}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="pt-5 mt-4 font-bold text-2xl text-black-variant leading-8">
              Not Included
            </h3>
            <p className="text-sm md:text-lg text-[#757575] font-mont">
              While we strive to provide a comprehensive and enjoyable travel
              experience, there are certain services not included in our
              package. Please note that additional pick-up and drop-off services
              beyond the specified ones are not covered. Extra meals outside of
              the daily included meal will need to be arranged separately. Car
              parking beyond the allotted time or spaces will incur additional
              charges. Entry fees to certain music events may not be included,
              and accommodation at hotels outside our partner network is not
              covered. Any additional security measures or personal safety
              equipment will need to be arranged by the traveler.
            </p>
            <div className="flex justify-between gap-3 mt-5 mb-8 pt-3 items-center">
              {tour.whatNotIncludes.map((item) => (
                <div
                  dangerouslySetInnerHTML={{ __html: item.icons }}
                  key={item.id}
                />
              ))}
            </div>
            <span className="mt-4">
              This tour is not suitable for pregnant mothers or individuals with
              the sdf accessibility needs (wheelchairs).
            </span>
          </div>
          <div className="">
            <h3 className="pt-5 mt-4 font-bold text-2xl text-black-variant leading-8">
              Clients Feedback
            </h3>
            <p className="text-sm md:text-lg text-[#757575] font-mont">
              See what Our Valuebale Clients Share about there Journey
            </p>
          </div>

          <div>
            {reviews.length != 0 &&
              reviews.map((item) => (
                <>
                  <div className="mb-3 mt-10">
                    <div className="flex gap-3 items-center">
                    <Image
                        className="w-20 h-20 object-cover rounded-full "
                        src={Client01}
                        alt="client_01"
                      />
                      <div className="client-info font-mont">
                        <p className=" text-lg text-black-variant font-medium ">
                          {item.user.name + ' ' + item.user?.last_name}
                        </p>
                        <p className=" text-sm text-[#4F4F4FCC]">{DateformateMonthNameDateYear(item.review.createdAt)}</p>
                      </div>
                    </div>
                    <div className="romantic-copy-long-des flex md:px-24 pt-1 mr-1 gap-5">
                      <div className="quality">
                        <p>Rating</p>
                        <div className="flex">
                          {[...Array(item.review.rating)].map((_, index) => (
                            <div key={index}>
                              <Image
                                src={RatingStar}
                                alt="Star"
                                width={16}
                                height={16}
                              />
                            </div>
                           
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="md:px-24 pt-2 text-sm md:text-lg text-[#757575] font-mont">
                      {item.review.review}
                    </p>
                  </div>
                  <Divider />
                </>
              ))}
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          <div className="font-mont mt-4 pt-8 border rounded-2xl p-6">
            <Grid container>
              <Grid item xs={12}>
                <div className="border-t-4 border-[#FFA500] w-24 mb-2" />
                <p className="text-[#344054] text-xs font-semibold md:font-medium pt-4">
                  Starting Price
                </p>
                <div className="text-[#000] text-4xl font-semibold pt-4 flex items-center gap-1">
                  <sub>us</sub>
                  <div>$1,143</div>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} mt={2}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    Pickup Location *
                  </label>
                  <br />

                  <FormControl fullWidth>
                    <Select
                      value={age}
                      onChange={handleChange}
                      className="pr-8 pl-2 py-2 w-full h-10 focus:outline-none bg-[#FBFBFB]"
                      sx={{
                        borderRadius: "7px",
                      }}
                      IconComponent={() => (
                        <InputAdornment
                          position="end"
                          className="absolute right-2"
                        >
                          <Image
                            src="/icons/carticons/marker.png"
                            className="w-4"
                            width={12}
                            height={12}
                            alt="Icon"
                          />
                        </InputAdornment>
                      )}
                      renderValue={(v) => (
                        <div className="text-gray-500 font-mont">{v}</div>
                      )}
                    >
                      <MenuItem
                        className="font-mont"
                        value={"Pickup Location"}
                        disabled
                      >
                        <div className="font-mont">Pickup Location</div>
                      </MenuItem>

                      {!!locations?.length &&
                        locations.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            <div className="font-mont text-gray-500">
                              {item}
                            </div>
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <div className="form-group">
                  <label className="mb-2 text-sm font-mont font-normal text-[#344054]">
                    Tour Date *
                  </label>
                  <br />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="w-full pl-2 rounded-lg bg-[#FBFBFB] outline-none"
                      slotProps={{
                        textField: { size: "small" },
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Link href={"/book-now"}>
                  <button className="bg-[#FFA500] text-white font-semibold font-mont text-xl px-4 py-3 rounded-lg w-full mt-4">
                    Check Availability
                  </button>
                </Link>
              </Grid>
            </Grid>
          </div>

          <div className="font-mont mt-4 pt-8 md:border rounded-2xl p-2 md:p-6">
            <div className="w-full">
              <div className="flex justify-center items-center">
                <Image
                  src={GroupImage}
                  className="object-contain w-36"
                  alt={""}
                />
              </div>

              <div className="flex flex-col justify-between items-center my-6">
                <h1 className="font-semibold text-lg">Groups Booking</h1>
                <p className="text-center text-[#667085] text-base pt-2">
                  Manage Bookings for larger groups with special pricing and
                  offers
                </p>
              </div>

              <div>
                <button className="bg-[#FFA500] text-white font-semibold font-mont text-xl px-4 py-3 rounded-lg w-full mt-4">
                  Book Groups
                </button>
              </div>
            </div>
          </div>

          <div className="font-mont mt-4 pt-8 md:border rounded-2xl p-2 md:p-6">
            <div className="border-t-4 border-[#FFA500] w-24 mb-4" />
            <label className="text-[#000] text-2xl pr-2 md:pr-0 font-semibold md:font-medium pt-4">
              Frequent Asked Question
            </label>
            <div className="w-full my-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${
                    activeIndex === index
                      ? "bg-white border-white shadow-lg "
                      : "bg-[#FBFBFB] border-gray-200"
                  } rounded-md mb-4 `}
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
        </Grid>
      </Grid>
    </div>
  );
}
