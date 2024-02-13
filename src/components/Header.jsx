import React from "react";
import { Toggle } from "./Toggle/Toggle";
import useLocalStorage from "use-local-storage";

const Header = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <header className="shadow-md " data-theme={isDark ? "dark" : "light"}>
      <div
        className="mx-auto flex max-w-[1560px]
    max-h-[90px] items-center justify-between p-6 lg:px-8 "
      >
        <div className="header__logo flex items-end">
          <div>
            <svg
              width="52"
              height="38"
              viewBox="0 0 52 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8286 2.63327C16.8227 6.83314 12.5145 11.853 10.0841 16.3472C10.0315 16.5154 10.1367 16.7362 10.2525 16.6206C12.8459 15.1908 15.2762 14.4707 16.9332 14.4707C20.8575 14.4497 24.3557 17.9242 24.3925 23.1806C24.3925 28.642 21.7623 33.1152 16.7701 35.6015C14.9265 36.5019 12.9091 36.9916 10.8574 37.0365C3.72956 37.0312 0.683777 31.9535 0.683777 26.3765C0.683777 14.6704 12.0726 4.67801 25.2236 0.924934C25.4972 1.03006 26.0495 2.4125 25.8286 2.63327ZM8.47971 20.0267C7.71517 22.1333 7.32183 24.3564 7.31716 26.5972C7.31716 32.1165 9.36347 34.7447 12.404 34.7447C15.718 34.7447 18.0432 30.1295 18.0432 25.2831C17.9905 20.258 16.0021 17.8821 12.688 17.8821C11.5799 17.9165 10.4967 18.2195 9.5318 18.7652C9.06924 19.0829 8.70481 19.5235 8.47971 20.0372V20.0267ZM51.0891 2.63327C42.078 6.82788 37.7645 11.853 35.3341 16.3472C35.2815 16.5102 35.3867 16.731 35.5025 16.6206C38.0959 15.1856 40.5262 14.4654 42.1832 14.4654C46.1075 14.4444 49.6057 17.9242 49.6425 23.1806C49.6425 28.6472 47.0123 33.1204 42.0201 35.6067C40.176 36.5054 38.1587 36.9932 36.1074 37.0365C28.9796 37.026 25.9338 31.9483 25.9338 26.3765C25.9338 14.6652 37.3226 4.67275 50.4736 0.919678C50.7524 1.03006 51.3048 2.4125 51.0838 2.63327H51.0891ZM33.735 20.0267C32.9675 22.1325 32.5741 24.3561 32.5724 26.5972C32.5724 32.1165 34.6187 34.7447 37.654 34.7447C40.968 34.7447 43.2932 30.1295 43.2932 25.2831C43.2353 20.2633 41.2468 17.8874 37.9328 17.8874C36.8246 17.9217 35.7414 18.2248 34.7765 18.7704C34.3122 19.0862 33.9473 19.5274 33.7245 20.0425L33.735 20.0267Z"
                fill="#155DA4"
              />
            </svg>
          </div>
          <div>
            <svg
              width="46"
              height="30"
              viewBox="0 0 46 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9127 27.3012C12.3194 28.4633 10.3877 29.0692 8.41558 29.0253C5.34876 29.0253 2.36085 28.2369 0.75116 27.1961C0.972097 26.518 1.34559 25.2144 1.49814 24.468L5.091 7.61597C5.38897 6.33892 5.56511 5.03651 5.61704 3.72623C5.62627 3.23675 5.57682 2.74794 5.46975 2.27021L10.6881 0.661743C10.8027 1.18988 10.8521 1.73005 10.8354 2.27021C10.8172 3.43733 10.6922 4.60033 10.4619 5.74469L9.82538 8.77238C9.64999 9.64665 9.41267 10.5074 9.11522 11.348C9.76799 10.5918 10.5751 9.98381 11.4824 9.56496C12.3897 9.1461 13.3762 8.92605 14.3756 8.91956C17.9317 8.91956 19.4993 11.4269 19.4993 15.5742C19.4993 20.2787 17.5161 24.7676 13.9285 27.3012H13.9127ZM12.5292 12.9933C10.9984 12.9933 9.37298 14.2653 8.37876 15.9842L6.51131 24.4996C7.24471 25.0879 8.17119 25.3822 9.10996 25.3248C10.1936 25.3248 11.5403 24.3156 12.2662 23.0856C13.3183 21.2143 14.06 16.9934 14.06 15.4953C14.06 13.8553 13.5761 12.9933 12.5661 12.9933H12.5292ZM29.2468 7.24277C28.4288 7.23721 27.6464 6.90751 27.0714 6.32606C26.4964 5.7446 26.1758 4.95891 26.18 4.14149C26.1834 3.73101 26.2678 3.32524 26.4284 2.94739C26.5889 2.56954 26.8225 2.22704 27.1156 1.93947C27.4088 1.65191 27.7558 1.42493 28.1369 1.27153C28.5179 1.11812 28.9255 1.0413 29.3363 1.04546C29.739 1.04889 30.137 1.1318 30.5076 1.28945C30.8781 1.4471 31.2138 1.67636 31.4954 1.96407C31.7769 2.25178 31.9988 2.59225 32.1483 2.96593C32.2977 3.3396 32.3718 3.73911 32.3663 4.14149C32.367 4.54895 32.2871 4.95254 32.1314 5.32911C31.9757 5.70569 31.7471 6.04785 31.4588 6.33597C31.1704 6.62409 30.828 6.8525 30.4511 7.00811C30.0743 7.16372 29.6704 7.24346 29.2626 7.24277H29.2468ZM26.5535 28.5417H21.5456L25.5435 9.75008L30.704 8.96161L26.5535 28.5417ZM45.4068 9.40841L43.613 12.8461H40.2832L38.2632 22.4496C38.139 22.9998 38.0772 23.5623 38.0791 24.1264C38.0791 25.1776 38.6367 25.514 39.7571 25.514C40.3974 25.4868 41.0294 25.3591 41.6298 25.1356V28.1633C40.2692 28.6924 38.8237 28.9702 37.3637 28.9833C34.4862 28.9833 32.8397 27.564 32.8397 25.698C32.8447 24.8696 32.9328 24.0437 33.1027 23.2328L35.3068 12.8461H33.4026L34.1495 9.40841H36.0591C36.3176 7.87188 36.7048 6.35975 37.2164 4.8879L42.4768 3.61585C41.9192 5.37149 41.3563 7.46354 40.946 9.3979L45.4068 9.40841Z"
                fill="#155DA4"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-normal pr-16 max-[600px]:hidden">
            +7 343 290 84 76
          </div>
          <div className="font-normal pr-12 max-[600px]:hidden">
            info@66bit.ru
          </div>
          <div>
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
