"use client";
import CardComponent from "@/src/components/dashboard/dashboardComponents/Card";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import {
  AgentAvatarOne,
  CartTourImage,
  RatingStar,
} from "@/src/utils/images/images";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";

function Chats() {
  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Reviews</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>

      <Grid container className="gap-3 md:gap-0 ">
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Total Revenue"
            count={"2,420"}
            percentage={"40%"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent
            title="Average Rating"
            Component={() => (
              <div className="flex flex-col">
                <div className="flex pt-4 gap-1">
                  <div className="text-black text-2xl font-bold ">4.0</div>
                  {[2, 2, 2, 2].map((_, index) => (
                    <Image
                      src={RatingStar}
                      alt=""
                      key={index}
                      className="object-contain"
                    />
                  ))}
                </div>

                <div className="text-[#475467] font-medium text-base my-4">
                  Average Rating of the year 2023
                </div>
              </div>
            )}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CardComponent
            Component={() => (
              <svg
                width="257"
                height="132"
                viewBox="0 0 297 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.87686 7.00412C7.02357 6.71834 7.09693 6.57545 7.19652 6.52979C7.28316 6.49007 7.38383 6.49007 7.47047 6.52979C7.57006 6.57545 7.64342 6.71834 7.79014 7.00412L9.18207 9.71543C9.22538 9.79979 9.24704 9.84198 9.27869 9.87473C9.30671 9.90373 9.34032 9.92723 9.37765 9.94392C9.41982 9.96277 9.46823 9.96958 9.56506 9.98319L12.6786 10.4207C13.0065 10.4668 13.1704 10.4899 13.2463 10.5669C13.3123 10.6339 13.3433 10.7259 13.3308 10.8174C13.3163 10.9225 13.1976 11.0337 12.9603 11.256L10.7081 13.3651C10.6379 13.4308 10.6028 13.4637 10.5802 13.5028C10.5601 13.5375 10.5472 13.5755 10.5423 13.6148C10.5367 13.6593 10.545 13.7057 10.5615 13.7986L11.0929 16.7776C11.149 17.0918 11.177 17.2489 11.1243 17.3422C11.0785 17.4233 10.9971 17.4802 10.9027 17.497C10.7942 17.5163 10.6474 17.4421 10.354 17.2937L7.57052 15.8863C7.4838 15.8425 7.44043 15.8205 7.39475 15.8119C7.3543 15.8043 7.31269 15.8043 7.27224 15.8119C7.22656 15.8205 7.1832 15.8425 7.09647 15.8863L4.313 17.2937C4.01955 17.4421 3.87282 17.5163 3.76433 17.497C3.66993 17.4802 3.58848 17.4233 3.54266 17.3422C3.48999 17.2489 3.51802 17.0918 3.57406 16.7776L4.10546 13.7986C4.12203 13.7057 4.13031 13.6593 4.12471 13.6148C4.11975 13.5755 4.10688 13.5375 4.08683 13.5028C4.06417 13.4637 4.02907 13.4308 3.95887 13.3651L1.70673 11.256C1.46936 11.0337 1.35068 10.9225 1.33624 10.8174C1.32367 10.7259 1.35472 10.6339 1.42072 10.5669C1.49659 10.4899 1.66053 10.4668 1.9884 10.4207L5.10194 9.98319C5.19876 9.96958 5.24718 9.96277 5.28934 9.94392C5.32667 9.92723 5.36028 9.90373 5.3883 9.87473C5.41995 9.84198 5.44161 9.79979 5.48492 9.71543L6.87686 7.00412Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.7495 18.16C29.9602 18.16 29.1868 18.048 28.4295 17.824C27.6828 17.5893 27.0535 17.2693 26.5415 16.864L27.4215 15.248C27.8268 15.5787 28.3175 15.8453 28.8935 16.048C29.4802 16.2507 30.0882 16.352 30.7175 16.352C31.4535 16.352 32.0295 16.1973 32.4455 15.888C32.8722 15.5787 33.0855 15.1627 33.0855 14.64C33.0855 14.288 32.9948 13.9787 32.8135 13.712C32.6428 13.4453 32.3335 13.2427 31.8855 13.104C31.4482 12.9653 30.8455 12.896 30.0775 12.896H27.3735L27.9495 6.8H34.5255V8.544H28.7175L29.8055 7.552L29.3735 12.112L28.2855 11.136H30.5415C31.6508 11.136 32.5415 11.2853 33.2135 11.584C33.8962 11.872 34.3922 12.2773 34.7015 12.8C35.0215 13.312 35.1815 13.8987 35.1815 14.56C35.1815 15.2107 35.0215 15.808 34.7015 16.352C34.3815 16.896 33.8908 17.3333 33.2295 17.664C32.5788 17.9947 31.7522 18.16 30.7495 18.16Z"
                  fill="black"
                />
                <rect
                  x="49.3335"
                  y="8.5"
                  width="200"
                  height="7"
                  rx="2"
                  fill="#2FB59E"
                />
                <path
                  d="M253.753 16V14.956L257.089 11.788C257.369 11.524 257.577 11.292 257.713 11.092C257.849 10.892 257.937 10.708 257.977 10.54C258.025 10.364 258.049 10.2 258.049 10.048C258.049 9.664 257.917 9.368 257.653 9.16C257.389 8.944 257.001 8.836 256.489 8.836C256.081 8.836 255.709 8.908 255.373 9.052C255.045 9.196 254.761 9.416 254.521 9.712L253.429 8.872C253.757 8.432 254.197 8.092 254.749 7.852C255.309 7.604 255.933 7.48 256.621 7.48C257.229 7.48 257.757 7.58 258.205 7.78C258.661 7.972 259.009 8.248 259.249 8.608C259.497 8.968 259.621 9.396 259.621 9.892C259.621 10.164 259.585 10.436 259.513 10.708C259.441 10.972 259.305 11.252 259.105 11.548C258.905 11.844 258.613 12.176 258.229 12.544L255.361 15.268L255.037 14.68H259.945V16H253.753ZM261.899 16.084C261.627 16.084 261.395 15.992 261.203 15.808C261.011 15.616 260.915 15.376 260.915 15.088C260.915 14.784 261.011 14.544 261.203 14.368C261.395 14.184 261.627 14.092 261.899 14.092C262.171 14.092 262.403 14.184 262.595 14.368C262.787 14.544 262.883 14.784 262.883 15.088C262.883 15.376 262.787 15.616 262.595 15.808C262.403 15.992 262.171 16.084 261.899 16.084ZM267.256 16.12C266.592 16.12 265.992 15.952 265.456 15.616C264.928 15.28 264.512 14.792 264.208 14.152C263.904 13.504 263.752 12.72 263.752 11.8C263.752 10.88 263.904 10.1 264.208 9.46C264.512 8.812 264.928 8.32 265.456 7.984C265.992 7.648 266.592 7.48 267.256 7.48C267.928 7.48 268.528 7.648 269.056 7.984C269.584 8.32 270 8.812 270.304 9.46C270.616 10.1 270.772 10.88 270.772 11.8C270.772 12.72 270.616 13.504 270.304 14.152C270 14.792 269.584 15.28 269.056 15.616C268.528 15.952 267.928 16.12 267.256 16.12ZM267.256 14.764C267.648 14.764 267.988 14.66 268.276 14.452C268.564 14.236 268.788 13.908 268.948 13.468C269.116 13.028 269.2 12.472 269.2 11.8C269.2 11.12 269.116 10.564 268.948 10.132C268.788 9.692 268.564 9.368 268.276 9.16C267.988 8.944 267.648 8.836 267.256 8.836C266.88 8.836 266.544 8.944 266.248 9.16C265.96 9.368 265.732 9.692 265.564 10.132C265.404 10.564 265.324 11.12 265.324 11.8C265.324 12.472 265.404 13.028 265.564 13.468C265.732 13.908 265.96 14.236 266.248 14.452C266.544 14.66 266.88 14.764 267.256 14.764ZM273.506 14.572L273.542 12.688L276.89 9.592H278.69L275.846 12.448L275.054 13.108L273.506 14.572ZM272.282 16V7.096H273.782V16H272.282ZM277.118 16L274.778 13.108L275.726 11.908L278.942 16H277.118Z"
                  fill="black"
                />
                <path
                  d="M6.87686 39.0041C7.02357 38.7183 7.09693 38.5754 7.19652 38.5298C7.28316 38.4901 7.38383 38.4901 7.47047 38.5298C7.57006 38.5754 7.64342 38.7183 7.79014 39.0041L9.18207 41.7154C9.22538 41.7998 9.24704 41.842 9.27869 41.8747C9.30671 41.9037 9.34032 41.9272 9.37765 41.9439C9.41982 41.9628 9.46823 41.9696 9.56506 41.9832L12.6786 42.4207C13.0065 42.4668 13.1704 42.4899 13.2463 42.5669C13.3123 42.6339 13.3433 42.7259 13.3308 42.8174C13.3163 42.9225 13.1976 43.0337 12.9603 43.256L10.7081 45.3651C10.6379 45.4308 10.6028 45.4637 10.5802 45.5028C10.5601 45.5375 10.5472 45.5755 10.5423 45.6148C10.5367 45.6593 10.545 45.7057 10.5615 45.7986L11.0929 48.7776C11.149 49.0918 11.177 49.2489 11.1243 49.3422C11.0785 49.4233 10.9971 49.4802 10.9027 49.497C10.7942 49.5163 10.6474 49.4421 10.354 49.2937L7.57052 47.8863C7.4838 47.8425 7.44043 47.8205 7.39475 47.8119C7.3543 47.8043 7.31269 47.8043 7.27224 47.8119C7.22656 47.8205 7.1832 47.8425 7.09647 47.8863L4.313 49.2937C4.01955 49.4421 3.87282 49.5163 3.76433 49.497C3.66993 49.4802 3.58848 49.4233 3.54266 49.3422C3.48999 49.2489 3.51802 49.0918 3.57406 48.7776L4.10546 45.7986C4.12203 45.7057 4.13031 45.6593 4.12471 45.6148C4.11975 45.5755 4.10688 45.5375 4.08683 45.5028C4.06417 45.4637 4.02907 45.4308 3.95887 45.3651L1.70673 43.256C1.46936 43.0337 1.35068 42.9225 1.33624 42.8174C1.32367 42.7259 1.35472 42.6339 1.42072 42.5669C1.49659 42.4899 1.66053 42.4668 1.9884 42.4207L5.10194 41.9832C5.19876 41.9696 5.24718 41.9628 5.28934 41.9439C5.32667 41.9272 5.36028 41.9037 5.3883 41.8747C5.41995 41.842 5.44161 41.7998 5.48492 41.7154L6.87686 39.0041Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8775 47.456V46.016L32.3975 38.8H34.6215L29.1815 46.016L28.1415 45.696H37.0215V47.456H26.8775ZM33.0215 50V47.456L33.0855 45.696V43.44H35.0375V50H33.0215Z"
                  fill="black"
                />
                <rect
                  x="50.3335"
                  y="40.5"
                  width="177"
                  height="7"
                  rx="2"
                  fill="#E07DFF"
                />
                <path
                  d="M233.205 48V40.2L233.889 40.908H231.429V39.6H234.765V48H233.205ZM237.368 48.084C237.096 48.084 236.864 47.992 236.672 47.808C236.48 47.616 236.384 47.376 236.384 47.088C236.384 46.784 236.48 46.544 236.672 46.368C236.864 46.184 237.096 46.092 237.368 46.092C237.64 46.092 237.872 46.184 238.064 46.368C238.256 46.544 238.352 46.784 238.352 47.088C238.352 47.376 238.256 47.616 238.064 47.808C237.872 47.992 237.64 48.084 237.368 48.084ZM242.725 48.12C242.061 48.12 241.461 47.952 240.925 47.616C240.397 47.28 239.981 46.792 239.677 46.152C239.373 45.504 239.221 44.72 239.221 43.8C239.221 42.88 239.373 42.1 239.677 41.46C239.981 40.812 240.397 40.32 240.925 39.984C241.461 39.648 242.061 39.48 242.725 39.48C243.397 39.48 243.997 39.648 244.525 39.984C245.053 40.32 245.469 40.812 245.773 41.46C246.085 42.1 246.241 42.88 246.241 43.8C246.241 44.72 246.085 45.504 245.773 46.152C245.469 46.792 245.053 47.28 244.525 47.616C243.997 47.952 243.397 48.12 242.725 48.12ZM242.725 46.764C243.117 46.764 243.457 46.66 243.745 46.452C244.033 46.236 244.257 45.908 244.417 45.468C244.585 45.028 244.669 44.472 244.669 43.8C244.669 43.12 244.585 42.564 244.417 42.132C244.257 41.692 244.033 41.368 243.745 41.16C243.457 40.944 243.117 40.836 242.725 40.836C242.349 40.836 242.013 40.944 241.717 41.16C241.429 41.368 241.201 41.692 241.033 42.132C240.873 42.564 240.793 43.12 240.793 43.8C240.793 44.472 240.873 45.028 241.033 45.468C241.201 45.908 241.429 46.236 241.717 46.452C242.013 46.66 242.349 46.764 242.725 46.764ZM248.975 46.572L249.011 44.688L252.359 41.592H254.159L251.315 44.448L250.523 45.108L248.975 46.572ZM247.751 48V39.096H249.251V48H247.751ZM252.587 48L250.247 45.108L251.195 43.908L254.411 48H252.587Z"
                  fill="black"
                />
                <path
                  d="M6.87686 71.0041C7.02357 70.7183 7.09693 70.5754 7.19652 70.5298C7.28316 70.4901 7.38383 70.4901 7.47047 70.5298C7.57006 70.5754 7.64342 70.7183 7.79014 71.0041L9.18207 73.7154C9.22538 73.7998 9.24704 73.842 9.27869 73.8747C9.30671 73.9037 9.34032 73.9272 9.37765 73.9439C9.41982 73.9628 9.46823 73.9696 9.56506 73.9832L12.6786 74.4207C13.0065 74.4668 13.1704 74.4899 13.2463 74.5669C13.3123 74.6339 13.3433 74.7259 13.3308 74.8174C13.3163 74.9225 13.1976 75.0337 12.9603 75.256L10.7081 77.3651C10.6379 77.4308 10.6028 77.4637 10.5802 77.5028C10.5601 77.5375 10.5472 77.5755 10.5423 77.6148C10.5367 77.6593 10.545 77.7057 10.5615 77.7986L11.0929 80.7776C11.149 81.0918 11.177 81.2489 11.1243 81.3422C11.0785 81.4233 10.9971 81.4802 10.9027 81.497C10.7942 81.5163 10.6474 81.4421 10.354 81.2937L7.57052 79.8863C7.4838 79.8425 7.44043 79.8205 7.39475 79.8119C7.3543 79.8043 7.31269 79.8043 7.27224 79.8119C7.22656 79.8205 7.1832 79.8425 7.09647 79.8863L4.313 81.2937C4.01955 81.4421 3.87282 81.5163 3.76433 81.497C3.66993 81.4802 3.58848 81.4233 3.54266 81.3422C3.48999 81.2489 3.51802 81.0918 3.57406 80.7776L4.10546 77.7986C4.12203 77.7057 4.13031 77.6593 4.12471 77.6148C4.11975 77.5755 4.10688 77.5375 4.08683 77.5028C4.06417 77.4637 4.02907 77.4308 3.95887 77.3651L1.70673 75.256C1.46936 75.0337 1.35068 74.9225 1.33624 74.8174C1.32367 74.7259 1.35472 74.6339 1.42072 74.5669C1.49659 74.4899 1.66053 74.4668 1.9884 74.4207L5.10194 73.9832C5.19876 73.9696 5.24718 73.9628 5.28934 73.9439C5.32667 73.9272 5.36028 73.9037 5.3883 73.8747C5.41995 73.842 5.44161 73.7998 5.48492 73.7154L6.87686 71.0041Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.5575 82.16C29.7682 82.16 28.9948 82.048 28.2375 81.824C27.4908 81.5893 26.8615 81.2693 26.3495 80.864L27.2455 79.248C27.6508 79.5787 28.1415 79.8453 28.7175 80.048C29.2935 80.2507 29.8962 80.352 30.5255 80.352C31.2722 80.352 31.8535 80.2027 32.2695 79.904C32.6855 79.5947 32.8935 79.1787 32.8935 78.656C32.8935 78.144 32.7015 77.7387 32.3175 77.44C31.9335 77.1413 31.3148 76.992 30.4615 76.992H29.4375V75.568L32.6375 71.76L32.9095 72.544H26.8935V70.8H34.5255V72.192L31.3255 76L30.2375 75.36H30.8615C32.2375 75.36 33.2668 75.6693 33.9495 76.288C34.6428 76.896 34.9895 77.68 34.9895 78.64C34.9895 79.2693 34.8295 79.8507 34.5095 80.384C34.1895 80.9173 33.6988 81.3493 33.0375 81.68C32.3868 82 31.5602 82.16 30.5575 82.16Z"
                  fill="black"
                />
                <rect
                  x="49.3335"
                  y="72.5"
                  width="146"
                  height="7"
                  rx="2"
                  fill="#F5BE36"
                />
                <path
                  d="M202.645 80.12C202.053 80.12 201.473 80.036 200.905 79.868C200.345 79.692 199.873 79.452 199.489 79.148L200.149 77.936C200.453 78.184 200.821 78.384 201.253 78.536C201.693 78.688 202.149 78.764 202.621 78.764C203.173 78.764 203.605 78.648 203.917 78.416C204.237 78.184 204.397 77.872 204.397 77.48C204.397 77.216 204.329 76.984 204.193 76.784C204.065 76.584 203.833 76.432 203.497 76.328C203.169 76.224 202.717 76.172 202.141 76.172H200.113L200.545 71.6H205.477V72.908H201.121L201.937 72.164L201.613 75.584L200.797 74.852H202.489C203.321 74.852 203.989 74.964 204.493 75.188C205.005 75.404 205.377 75.708 205.609 76.1C205.849 76.484 205.969 76.924 205.969 77.42C205.969 77.908 205.849 78.356 205.609 78.764C205.369 79.172 205.001 79.5 204.505 79.748C204.017 79.996 203.397 80.12 202.645 80.12ZM210.373 80.12C209.709 80.12 209.109 79.952 208.573 79.616C208.045 79.28 207.629 78.792 207.325 78.152C207.021 77.504 206.869 76.72 206.869 75.8C206.869 74.88 207.021 74.1 207.325 73.46C207.629 72.812 208.045 72.32 208.573 71.984C209.109 71.648 209.709 71.48 210.373 71.48C211.045 71.48 211.645 71.648 212.173 71.984C212.701 72.32 213.117 72.812 213.421 73.46C213.733 74.1 213.889 74.88 213.889 75.8C213.889 76.72 213.733 77.504 213.421 78.152C213.117 78.792 212.701 79.28 212.173 79.616C211.645 79.952 211.045 80.12 210.373 80.12ZM210.373 78.764C210.765 78.764 211.105 78.66 211.393 78.452C211.681 78.236 211.905 77.908 212.065 77.468C212.233 77.028 212.317 76.472 212.317 75.8C212.317 75.12 212.233 74.564 212.065 74.132C211.905 73.692 211.681 73.368 211.393 73.16C211.105 72.944 210.765 72.836 210.373 72.836C209.997 72.836 209.661 72.944 209.365 73.16C209.077 73.368 208.849 73.692 208.681 74.132C208.521 74.564 208.441 75.12 208.441 75.8C208.441 76.472 208.521 77.028 208.681 77.468C208.849 77.908 209.077 78.236 209.365 78.452C209.661 78.66 209.997 78.764 210.373 78.764ZM218.448 80.12C217.784 80.12 217.184 79.952 216.648 79.616C216.12 79.28 215.704 78.792 215.4 78.152C215.096 77.504 214.944 76.72 214.944 75.8C214.944 74.88 215.096 74.1 215.4 73.46C215.704 72.812 216.12 72.32 216.648 71.984C217.184 71.648 217.784 71.48 218.448 71.48C219.12 71.48 219.72 71.648 220.248 71.984C220.776 72.32 221.192 72.812 221.496 73.46C221.808 74.1 221.964 74.88 221.964 75.8C221.964 76.72 221.808 77.504 221.496 78.152C221.192 78.792 220.776 79.28 220.248 79.616C219.72 79.952 219.12 80.12 218.448 80.12ZM218.448 78.764C218.84 78.764 219.18 78.66 219.468 78.452C219.756 78.236 219.98 77.908 220.14 77.468C220.308 77.028 220.392 76.472 220.392 75.8C220.392 75.12 220.308 74.564 220.14 74.132C219.98 73.692 219.756 73.368 219.468 73.16C219.18 72.944 218.84 72.836 218.448 72.836C218.072 72.836 217.736 72.944 217.44 73.16C217.152 73.368 216.924 73.692 216.756 74.132C216.596 74.564 216.516 75.12 216.516 75.8C216.516 76.472 216.596 77.028 216.756 77.468C216.924 77.908 217.152 78.236 217.44 78.452C217.736 78.66 218.072 78.764 218.448 78.764Z"
                  fill="black"
                />
                <path
                  d="M6.87686 103.004C7.02357 102.718 7.09693 102.575 7.19652 102.53C7.28316 102.49 7.38383 102.49 7.47047 102.53C7.57006 102.575 7.64342 102.718 7.79014 103.004L9.18207 105.715C9.22538 105.8 9.24704 105.842 9.27869 105.875C9.30671 105.904 9.34032 105.927 9.37765 105.944C9.41982 105.963 9.46823 105.97 9.56506 105.983L12.6786 106.421C13.0065 106.467 13.1704 106.49 13.2463 106.567C13.3123 106.634 13.3433 106.726 13.3308 106.817C13.3163 106.923 13.1976 107.034 12.9603 107.256L10.7081 109.365C10.6379 109.431 10.6028 109.464 10.5802 109.503C10.5601 109.537 10.5472 109.575 10.5423 109.615C10.5367 109.659 10.545 109.706 10.5615 109.799L11.0929 112.778C11.149 113.092 11.177 113.249 11.1243 113.342C11.0785 113.423 10.9971 113.48 10.9027 113.497C10.7942 113.516 10.6474 113.442 10.354 113.294L7.57052 111.886C7.4838 111.842 7.44043 111.821 7.39475 111.812C7.3543 111.804 7.31269 111.804 7.27224 111.812C7.22656 111.821 7.1832 111.842 7.09647 111.886L4.313 113.294C4.01955 113.442 3.87282 113.516 3.76433 113.497C3.66993 113.48 3.58848 113.423 3.54266 113.342C3.48999 113.249 3.51802 113.092 3.57406 112.778L4.10546 109.799C4.12203 109.706 4.13031 109.659 4.12471 109.615C4.11975 109.575 4.10688 109.537 4.08683 109.503C4.06417 109.464 4.02907 109.431 3.95887 109.365L1.70673 107.256C1.46936 107.034 1.35068 106.923 1.33624 106.817C1.32367 106.726 1.35472 106.634 1.42072 106.567C1.49659 106.49 1.66053 106.467 1.9884 106.421L5.10194 105.983C5.19876 105.97 5.24718 105.963 5.28934 105.944C5.32667 105.927 5.36028 105.904 5.3883 105.875C5.41995 105.842 5.44161 105.8 5.48492 105.715L6.87686 103.004Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8935 114V112.608L31.3415 108.384C31.7148 108.032 31.9922 107.723 32.1735 107.456C32.3548 107.189 32.4722 106.944 32.5255 106.72C32.5895 106.485 32.6215 106.267 32.6215 106.064C32.6215 105.552 32.4455 105.157 32.0935 104.88C31.7415 104.592 31.2242 104.448 30.5415 104.448C29.9975 104.448 29.5015 104.544 29.0535 104.736C28.6162 104.928 28.2375 105.221 27.9175 105.616L26.4615 104.496C26.8988 103.909 27.4855 103.456 28.2215 103.136C28.9682 102.805 29.8002 102.64 30.7175 102.64C31.5282 102.64 32.2322 102.773 32.8295 103.04C33.4375 103.296 33.9015 103.664 34.2215 104.144C34.5522 104.624 34.7175 105.195 34.7175 105.856C34.7175 106.219 34.6695 106.581 34.5735 106.944C34.4775 107.296 34.2962 107.669 34.0295 108.064C33.7628 108.459 33.3735 108.901 32.8615 109.392L29.0375 113.024L28.6055 112.24H35.1495V114H26.8935Z"
                  fill="black"
                />
                <rect
                  x="49.3335"
                  y="104.5"
                  width="103"
                  height="7"
                  rx="2"
                  fill="#7ED7F7"
                />
                <path
                  d="M156.753 112V110.956L160.089 107.788C160.369 107.524 160.577 107.292 160.713 107.092C160.849 106.892 160.937 106.708 160.977 106.54C161.025 106.364 161.049 106.2 161.049 106.048C161.049 105.664 160.917 105.368 160.653 105.16C160.389 104.944 160.001 104.836 159.489 104.836C159.081 104.836 158.709 104.908 158.373 105.052C158.045 105.196 157.761 105.416 157.521 105.712L156.429 104.872C156.757 104.432 157.197 104.092 157.749 103.852C158.309 103.604 158.933 103.48 159.621 103.48C160.229 103.48 160.757 103.58 161.205 103.78C161.661 103.972 162.009 104.248 162.249 104.608C162.497 104.968 162.621 105.396 162.621 105.892C162.621 106.164 162.585 106.436 162.513 106.708C162.441 106.972 162.305 107.252 162.105 107.548C161.905 107.844 161.613 108.176 161.229 108.544L158.361 111.268L158.037 110.68H162.945V112H156.753ZM167.35 112.12C166.686 112.12 166.086 111.952 165.55 111.616C165.022 111.28 164.606 110.792 164.302 110.152C163.998 109.504 163.846 108.72 163.846 107.8C163.846 106.88 163.998 106.1 164.302 105.46C164.606 104.812 165.022 104.32 165.55 103.984C166.086 103.648 166.686 103.48 167.35 103.48C168.022 103.48 168.622 103.648 169.15 103.984C169.678 104.32 170.094 104.812 170.398 105.46C170.71 106.1 170.866 106.88 170.866 107.8C170.866 108.72 170.71 109.504 170.398 110.152C170.094 110.792 169.678 111.28 169.15 111.616C168.622 111.952 168.022 112.12 167.35 112.12ZM167.35 110.764C167.742 110.764 168.082 110.66 168.37 110.452C168.658 110.236 168.882 109.908 169.042 109.468C169.21 109.028 169.294 108.472 169.294 107.8C169.294 107.12 169.21 106.564 169.042 106.132C168.882 105.692 168.658 105.368 168.37 105.16C168.082 104.944 167.742 104.836 167.35 104.836C166.974 104.836 166.638 104.944 166.342 105.16C166.054 105.368 165.826 105.692 165.658 106.132C165.498 106.564 165.418 107.12 165.418 107.8C165.418 108.472 165.498 109.028 165.658 109.468C165.826 109.908 166.054 110.236 166.342 110.452C166.638 110.66 166.974 110.764 167.35 110.764ZM175.424 112.12C174.76 112.12 174.16 111.952 173.624 111.616C173.096 111.28 172.68 110.792 172.376 110.152C172.072 109.504 171.92 108.72 171.92 107.8C171.92 106.88 172.072 106.1 172.376 105.46C172.68 104.812 173.096 104.32 173.624 103.984C174.16 103.648 174.76 103.48 175.424 103.48C176.096 103.48 176.696 103.648 177.224 103.984C177.752 104.32 178.168 104.812 178.472 105.46C178.784 106.1 178.94 106.88 178.94 107.8C178.94 108.72 178.784 109.504 178.472 110.152C178.168 110.792 177.752 111.28 177.224 111.616C176.696 111.952 176.096 112.12 175.424 112.12ZM175.424 110.764C175.816 110.764 176.156 110.66 176.444 110.452C176.732 110.236 176.956 109.908 177.116 109.468C177.284 109.028 177.368 108.472 177.368 107.8C177.368 107.12 177.284 106.564 177.116 106.132C176.956 105.692 176.732 105.368 176.444 105.16C176.156 104.944 175.816 104.836 175.424 104.836C175.048 104.836 174.712 104.944 174.416 105.16C174.128 105.368 173.9 105.692 173.732 106.132C173.572 106.564 173.492 107.12 173.492 107.8C173.492 108.472 173.572 109.028 173.732 109.468C173.9 109.908 174.128 110.236 174.416 110.452C174.712 110.66 175.048 110.764 175.424 110.764Z"
                  fill="black"
                />
                <path
                  d="M6.87686 135.004C7.02357 134.718 7.09693 134.575 7.19652 134.53C7.28316 134.49 7.38383 134.49 7.47047 134.53C7.57006 134.575 7.64342 134.718 7.79014 135.004L9.18207 137.715C9.22538 137.8 9.24704 137.842 9.27869 137.875C9.30671 137.904 9.34032 137.927 9.37765 137.944C9.41982 137.963 9.46823 137.97 9.56506 137.983L12.6786 138.421C13.0065 138.467 13.1704 138.49 13.2463 138.567C13.3123 138.634 13.3433 138.726 13.3308 138.817C13.3163 138.923 13.1976 139.034 12.9603 139.256L10.7081 141.365C10.6379 141.431 10.6028 141.464 10.5802 141.503C10.5601 141.537 10.5472 141.575 10.5423 141.615C10.5367 141.659 10.545 141.706 10.5615 141.799L11.0929 144.778C11.149 145.092 11.177 145.249 11.1243 145.342C11.0785 145.423 10.9971 145.48 10.9027 145.497C10.7942 145.516 10.6474 145.442 10.354 145.294L7.57052 143.886C7.4838 143.842 7.44043 143.821 7.39475 143.812C7.3543 143.804 7.31269 143.804 7.27224 143.812C7.22656 143.821 7.1832 143.842 7.09647 143.886L4.313 145.294C4.01955 145.442 3.87282 145.516 3.76433 145.497C3.66993 145.48 3.58848 145.423 3.54266 145.342C3.48999 145.249 3.51802 145.092 3.57406 144.778L4.10546 141.799C4.12203 141.706 4.13031 141.659 4.12471 141.615C4.11975 141.575 4.10688 141.537 4.08683 141.503C4.06417 141.464 4.02907 141.431 3.95887 141.365L1.70673 139.256C1.46936 139.034 1.35068 138.923 1.33624 138.817C1.32367 138.726 1.35472 138.634 1.42072 138.567C1.49659 138.49 1.66053 138.467 1.9884 138.421L5.10194 137.983C5.19876 137.97 5.24718 137.963 5.28934 137.944C5.32667 137.927 5.36028 137.904 5.3883 137.875C5.41995 137.842 5.44161 137.8 5.48492 137.715L6.87686 135.004Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.8295 146V135.6L31.7415 136.544H28.4615V134.8H32.9095V146H30.8295Z"
                  fill="black"
                />
                <rect
                  x="50.3335"
                  y="136.5"
                  width="67"
                  height="7"
                  rx="2"
                  fill="#F67519"
                />
                <path
                  d="M123.205 144V136.2L123.889 136.908H121.429V135.6H124.765V144H123.205ZM129.936 144.12C129.272 144.12 128.672 143.952 128.136 143.616C127.608 143.28 127.192 142.792 126.888 142.152C126.584 141.504 126.432 140.72 126.432 139.8C126.432 138.88 126.584 138.1 126.888 137.46C127.192 136.812 127.608 136.32 128.136 135.984C128.672 135.648 129.272 135.48 129.936 135.48C130.608 135.48 131.208 135.648 131.736 135.984C132.264 136.32 132.68 136.812 132.984 137.46C133.296 138.1 133.452 138.88 133.452 139.8C133.452 140.72 133.296 141.504 132.984 142.152C132.68 142.792 132.264 143.28 131.736 143.616C131.208 143.952 130.608 144.12 129.936 144.12ZM129.936 142.764C130.328 142.764 130.668 142.66 130.956 142.452C131.244 142.236 131.468 141.908 131.628 141.468C131.796 141.028 131.88 140.472 131.88 139.8C131.88 139.12 131.796 138.564 131.628 138.132C131.468 137.692 131.244 137.368 130.956 137.16C130.668 136.944 130.328 136.836 129.936 136.836C129.56 136.836 129.224 136.944 128.928 137.16C128.64 137.368 128.412 137.692 128.244 138.132C128.084 138.564 128.004 139.12 128.004 139.8C128.004 140.472 128.084 141.028 128.244 141.468C128.412 141.908 128.64 142.236 128.928 142.452C129.224 142.66 129.56 142.764 129.936 142.764Z"
                  fill="black"
                />
              </svg>
            )}
          />
        </Grid>
      </Grid>

      <Grid container className="mt-5 border rounded-lg">
        {[2, 2, 2].map(() => (
          <>
            <Grid item xs={12} md={4}>
              <div className="flex p-4">
                <div>
                  <Image src={CartTourImage} alt="" className="w-16" />
                </div>
                <div className="flex flex-col pl-3 gap-1 py-1">
                  <h1 className="font-semibold">Maldive To Lahore</h1>
                  <div className="text-xs font-medium">
                    Days: <span className="font-semibold">05 days</span>
                  </div>
                  <div className="text-xs font-medium">
                    Date: <span className="font-semibold">12/01/2024</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="p-4">
                <div className="flex">
                  <div>
                    <Image src={AgentAvatarOne} alt="" className="w-12" />
                  </div>
                  <div className="flex flex-col pl-3 gap-1 py-1">
                    <h1 className="font-semibold">Alina smith</h1>
                    <div className="text-xs font-medium">Student</div>
                    <div className="text-xs font-medium"></div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Lorem ipsum dolor sit amet consectetur. Mauris ac nisi amet
                  non erat integer mauris nulla. Auctor ut diam morbi tempor dui
                  bibendum quis pellentesque dictum. Amet hac malesuada platea
                  blandit purus. Cursus fermentum suscipit venenatis diam. dui
                  bibendum quis pellentesque dictum. Amet hac malesuada platea
                  blandit purus. Cursus
                </p>

                <div className="gap-2 flex">
                  <button className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5">
                    Public Comment
                  </button>

                  <button className="bg-[#E9E9E9] text-[#626262] font-medium text-xs px-6 py-2 rounded-lg mt-5">
                    Direct Message
                  </button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} px={2}>
              <Divider />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}

export default Chats;
