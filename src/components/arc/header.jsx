import React from "react";

export const Header = () => {
  return (
    <header className="arc-header bg-[#4148FB] text-white bg-[url('/arc/noise-light.png')] bg-repeat">
      <nav className="p-5 flex justify-between items-center max-w-7xl w-full mx-auto h-[100px]">
        <ul className="flex items-center gap-3 text-sm font-semibold">
          <li>
            <a href="#" className="arc-logo inline-block hover:scale-105 transition-all">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#a)">
                  <path
                    d="m26.906 8.075-1.917-3.947a6.623 6.623 0 0 0-11.958.099l-2.644 5.676a6.617 6.617 0 0 0-6.431-.147c-3.162 1.652-4.271 5.564-2.95 8.602.755 1.747 1.857 3.37 3.207 4.808l-.696 1.495a6.612 6.612 0 0 0 .259 6.089 6.526 6.526 0 0 0 2.409 2.425 6.613 6.613 0 0 0 4.09.86l.02-.003.018-.002a6.7 6.7 0 0 0 5.252-3.874l.348-.747c1.014.163 2.04.244 3.07.241h.028a19.277 19.277 0 0 0 3.483-.36l.435.895.002.004a6.637 6.637 0 0 0 6 3.723h.015a6.63 6.63 0 0 0 6.407-5.204l.005-.025.005-.024a6.706 6.706 0 0 0-.574-4.334l-.781-1.616c2.557-2.793 4.433-6.282 5.17-10.145A6.59 6.59 0 0 0 38.14 7.59a6.63 6.63 0 0 0-5.524-2.891h-.014a6.628 6.628 0 0 0-5.697 3.377Zm-7.27 8.277-.15-.307.15.307Zm-1.078.045.173-.37-.173.37Zm-9.487-3.669a3.522 3.522 0 0 0-3.679-.235 3.523 3.523 0 0 1 3.679.235Zm8.125 6.593ZM6.613 25.334l-.294.632.294-.632Zm25.404.358ZM22.209 5.479Zm7.976 3.342a3.535 3.535 0 0 1 2.455-1.032 3.539 3.539 0 0 1 2.95 1.546 3.498 3.498 0 0 1 .608 2.225l-6.013-2.74Z"
                    fill="#FFFCEA"
                  ></path>
                </g>
                <path
                  d="m11.12 15.662-1.546 3.325-1.615 3.47a18.27 18.27 0 0 0 1.914 1.39 18.317 18.317 0 0 0 4.302 1.984l1.56-3.35 1.465-3.15c-2.359-.493-4.72-1.916-6.08-3.67Z"
                  fill="#210784"
                ></path>
                <path
                  d="m30.252 22.063-3.27-6.736a11.892 11.892 0 0 1-2.494 2.306 10.684 10.684 0 0 1-3.459 1.591l3.125 6.42a18.08 18.08 0 0 0 4.312-2.193 18.72 18.72 0 0 0 1.786-1.388Z"
                  fill="#26069C"
                ></path>
                <path
                  d="M9.867 23.844a18.1 18.1 0 0 1-1.914-1.39l-1.634 3.512a3.522 3.522 0 0 0 .14 3.25c.303.535.745.98 1.278 1.285.659.387 1.426.55 2.185.462a3.61 3.61 0 0 0 2.834-2.097l1.413-3.037a18.32 18.32 0 0 1-4.302-1.985Z"
                  fill="#2404AA"
                ></path>
                <path
                  d="M35.59 9.335a3.538 3.538 0 0 0-2.95-1.546 3.537 3.537 0 0 0-3.433 2.877 10.647 10.647 0 0 1-2.22 4.662l3.27 6.735c2.96-2.603 5.134-6.14 5.885-10.081a3.5 3.5 0 0 0-.552-2.647Z"
                  fill="#F99"
                ></path>
                <g filter="url(#b)">
                  <path
                    d="m32.017 25.692-1.758-3.634-3.27-6.735-4.78-9.844a3.53 3.53 0 0 0-6.376.053l-4.717 10.125c1.359 1.754 3.726 3.184 6.079 3.667l1.535-3.298a.412.412 0 0 1 .744-.006l1.562 3.204 3.125 6.42 1.547 3.188a3.547 3.547 0 0 0 3.206 1.99 3.538 3.538 0 0 0 3.42-2.778 3.615 3.615 0 0 0-.317-2.352Z"
                    fill="#FF5060"
                  ></path>
                </g>
                <g filter="url(#c)">
                  <path
                    d="M21.033 19.223a9.02 9.02 0 0 1-2.123.276 8.23 8.23 0 0 1-1.712-.178c-2.353-.489-4.715-1.912-6.073-3.665a6.195 6.195 0 0 1-.806-1.337 3.523 3.523 0 0 0-4.927-1.826c-1.616.84-2.28 2.962-1.55 4.635.844 1.955 2.272 3.792 4.12 5.328.608.505 1.247.97 1.915 1.39a18.316 18.316 0 0 0 4.302 1.985c1.552.487 3.169.733 4.795.728a16.19 16.19 0 0 0 5.177-.916l-3.118-6.42Z"
                    fill="#0034FE"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="a"
                    x="-.531"
                    y="-.59"
                    width="40.819"
                    height="35.658"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation=".495"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_259_65398"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_259_65398"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="b"
                    x="10.125"
                    y="2.501"
                    width="23.271"
                    height="29.311"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation=".495"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_259_65398"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_259_65398"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="c"
                    x="2.556"
                    y="11.093"
                    width="22.585"
                    height="16.456"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation=".495"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_259_65398"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_259_65398"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Max</a>
          </li>
          <li>
            <a href="#">Arc Search</a>
          </li>
          <li>
            <a href="#">Developer</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <a
          href="#"
          className="py-3 px-5 bg-white text-[#4148FB] rounded-[10px] shadow-md hover:shadow-xl text-xs font-bold hover:scale-105 transition-all"
        >
          Download Arc
        </a>
      </nav>
    </header>
  );
};
