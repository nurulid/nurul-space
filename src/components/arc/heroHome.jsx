import Image from "next/image";
import React from "react";

export const HeroHome = () => {
  return (
    <section>
      <div className="text-center text-2xl font-bold bg-[#FFFCED] text-[#3239FB] border-t-4 border-b-4 border-double border-[#3239FB] py-8 px-5">
        <a href="#">
          <span>Arc Search for iOS is out now!</span>{" "}
          <span>Download it in the App Store →</span>
        </a>
      </div>
      <div className="bg-[#4148FB] text-white bg-[url('/arc/noise-light.png')] bg-repeat pt-14 pb-20 px-5 h-[78vh] overflow-hidden">
        <div className="inner max-w-7xl w-full mx-auto">
          <div className="text-center">
            <h1 className="text-[56px] font-bold leading-[.9] text-center w-[50%] mx-auto">
              "Arc is the Chrome replacement I’ve been waiting for."
            </h1>
            <a
              href="#"
              className="p-2 block font-bold text-[18px] uppercase my-8"
            >
              The Verge
            </a>
            <a
              href="#"
              className="py-5 px-16 bg-[#FF3333] text-white rounded-md shadow-md hover:shadow-xl text-sm font-bold "
            >
              Download Arc
            </a>
          </div>
        </div>
        <div class="arc-intro__image">
          <div class="arc-intro__image-stamp">
            <svg
              width="293"
              height="221"
              viewBox="0 0 293 221"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m94.02 137.295-2.985 2.113 2.042 2.884-1.349.954-4.93-6.962 4.706-3.332.775 1.095-3.357 2.377 1.341 1.894 2.984-2.113.772 1.09Zm7.484-5.429c.213.3.387.605.525.914.136.306.234.61.294.912.054.306.069.611.045.915a2.815 2.815 0 0 1-.206.865 2.905 2.905 0 0 1-.43.691 3.07 3.07 0 0 1-.644.6 3.144 3.144 0 0 1-.826.427 2.854 2.854 0 0 1-.836.147 3.02 3.02 0 0 1-.84-.131 3.462 3.462 0 0 1-.825-.385 4.505 4.505 0 0 1-.713-.572 5.839 5.839 0 0 1-.646-.77l-.718-1.014a5.83 5.83 0 0 1-.54-.924 4.488 4.488 0 0 1-.304-.927 3.488 3.488 0 0 1-.064-.851 2.642 2.642 0 0 1 .576-1.528 3.16 3.16 0 0 1 .666-.622c.267-.19.543-.332.825-.427.283-.1.564-.153.842-.158a2.56 2.56 0 0 1 .805.091 3.5 3.5 0 0 1 .77.308c.28.157.546.356.803.596.259.237.5.514.724.83l.717 1.013Zm-2.087-.058a5.18 5.18 0 0 0-.388-.487 3.237 3.237 0 0 0-.4-.392 2.286 2.286 0 0 0-.516-.323 1.425 1.425 0 0 0-.519-.135 1.22 1.22 0 0 0-.396.058c-.13.04-.26.105-.391.198a1.394 1.394 0 0 0-.306.288 1.098 1.098 0 0 0-.17.329 1.466 1.466 0 0 0-.04.531c.021.185.075.382.16.59.065.16.147.327.246.501.102.171.217.346.343.525l.725 1.023c.12.169.24.327.364.474.124.148.249.277.375.388.155.144.316.263.482.356.167.087.327.141.48.162.14.015.28.005.418-.03a1.31 1.31 0 0 0 .421-.205c.134-.095.244-.201.328-.318a1.1 1.1 0 0 0 .178-.378c.045-.166.057-.342.036-.527a2.425 2.425 0 0 0-.147-.593 3.53 3.53 0 0 0-.235-.494 5.13 5.13 0 0 0-.324-.518l-.724-1.023Zm6.958-2.837-1.019.721 1.842 2.601-1.343.952-4.93-6.963 2.333-1.652a4.533 4.533 0 0 1 1.146-.603 2.839 2.839 0 0 1 1.084-.172c.344.02.668.118.971.296.306.176.581.436.825.78.176.249.305.495.387.739.082.238.125.474.127.707.001.238-.035.471-.107.7-.07.226-.17.45-.3.672l3.532 1.814.044.062-1.44 1.019-3.152-1.673Zm-1.791-.37.995-.704c.207-.146.369-.304.484-.472.117-.173.185-.351.205-.532.02-.148.006-.299-.04-.453a1.52 1.52 0 0 0-.228-.463 1.573 1.573 0 0 0-.432-.427 1.022 1.022 0 0 0-.499-.178 1.27 1.27 0 0 0-.499.066 2.035 2.035 0 0 0-.54.282l-.989.701 1.543 2.18Zm12.203-13.55 2.512 2.149-1.101-3.148 1.669-1.181 4.929 6.962-1.233.874-1.46-2.061-2.248-3.297 1.226 3.669-.664.47-2.866-2.314 2.271 3.087 1.46 2.061-1.234.873-4.93-6.962 1.669-1.182Zm12.781-.778-2.09 1.479.618 1.745-1.415 1.002-2.649-8.577 1.219-.864 7.168 5.378-1.415 1.002-1.436-1.165Zm-2.569.103 1.444-1.023-2.527-2.059 1.083 3.082Zm10.571-6.861c.226.367.373.737.441 1.11a2.666 2.666 0 0 1-.458 2.09c-.226.318-.52.605-.883.862a3.392 3.392 0 0 1-.877.456 2.818 2.818 0 0 1-.885.139 2.896 2.896 0 0 1-.814-.135 3.737 3.737 0 0 1-.782-.365 4.655 4.655 0 0 1-.737-.584 5.936 5.936 0 0 1-.674-.801l-.664-.937a5.64 5.64 0 0 1-.498-.846 4.14 4.14 0 0 1-.3-.85 3.227 3.227 0 0 1-.1-.992c.019-.325.083-.633.192-.926.102-.254.242-.492.42-.714.179-.227.398-.432.656-.615a3.614 3.614 0 0 1 1.134-.558c.376-.104.741-.13 1.093-.078.353.052.693.18 1.019.384.327.204.635.477.924.818l-1.339.948a2.706 2.706 0 0 0-.482-.478 1.292 1.292 0 0 0-.488-.243 1.09 1.09 0 0 0-.521.025 1.708 1.708 0 0 0-.564.277 1.51 1.51 0 0 0-.273.244 1.13 1.13 0 0 0-.178.276c-.076.169-.11.358-.101.567.01.204.055.419.134.645a3.6 3.6 0 0 0 .254.552c.105.189.23.385.374.589l.671.947c.196.278.387.516.571.716.185.194.368.35.546.467.124.08.247.142.368.185a1.206 1.206 0 0 0 .756.003c.129-.048.259-.118.389-.211.176-.124.318-.258.426-.402a1.1 1.1 0 0 0 .21-.464 1.238 1.238 0 0 0-.026-.534 2.244 2.244 0 0 0-.278-.615l1.344-.952Zm6.571-5.837c.213.3.388.604.525.914.136.306.234.61.294.912.054.306.069.611.045.915a2.815 2.815 0 0 1-.206.864 2.91 2.91 0 0 1-.43.692 3.07 3.07 0 0 1-.644.6 3.144 3.144 0 0 1-.826.427 2.857 2.857 0 0 1-.836.147 3.012 3.012 0 0 1-.839-.131 3.503 3.503 0 0 1-.826-.385 4.515 4.515 0 0 1-.713-.572 5.778 5.778 0 0 1-.646-.77l-.718-1.014a5.842 5.842 0 0 1-.54-.925 4.472 4.472 0 0 1-.304-.926 3.489 3.489 0 0 1-.064-.851 2.85 2.85 0 0 1 .167-.808 2.67 2.67 0 0 1 .409-.721c.179-.227.401-.434.666-.621.267-.19.542-.332.825-.427.283-.1.564-.153.842-.158a2.56 2.56 0 0 1 .804.09c.266.071.523.174.772.31.278.156.546.355.802.594.259.238.5.515.724.83l.717 1.014Zm-2.087-.058a5.118 5.118 0 0 0-.388-.487 3.256 3.256 0 0 0-.399-.392 2.285 2.285 0 0 0-.517-.323 1.417 1.417 0 0 0-.519-.135 1.215 1.215 0 0 0-.396.058c-.13.039-.261.105-.391.198a1.37 1.37 0 0 0-.306.288 1.103 1.103 0 0 0-.17.328 1.477 1.477 0 0 0-.04.531c.021.186.075.383.16.591.065.16.147.326.246.5.102.172.217.347.343.525l.725 1.024c.119.169.241.327.364.474.124.147.249.277.375.388.155.144.316.262.482.355.167.088.327.142.481.162a1.151 1.151 0 0 0 .838-.234c.134-.095.244-.201.328-.319.085-.117.144-.243.178-.377.045-.166.057-.342.036-.528a2.429 2.429 0 0 0-.147-.592 5.302 5.302 0 0 0-.558-1.012l-.725-1.023Zm8.766-2.94a1.117 1.117 0 0 0-.314-.302 1.016 1.016 0 0 0-.432-.154 2.027 2.027 0 0 0-.59.038 4.442 4.442 0 0 0-.778.22c-.46.168-.89.28-1.289.339a3.69 3.69 0 0 1-1.062.012 2.292 2.292 0 0 1-.84-.295 2.18 2.18 0 0 1-.64-.61 2.085 2.085 0 0 1-.379-.93 2.246 2.246 0 0 1 .083-.978c.1-.325.269-.638.505-.94.234-.304.527-.58.878-.829.363-.257.732-.44 1.106-.547a2.877 2.877 0 0 1 1.091-.111c.352.037.681.144.988.32.306.175.57.42.791.732l-1.31.928a1.635 1.635 0 0 0-.391-.37 1.13 1.13 0 0 0-.456-.187 1.249 1.249 0 0 0-.52.045 1.77 1.77 0 0 0-.565.278 1.951 1.951 0 0 0-.431.406 1.26 1.26 0 0 0-.223.424 1 1 0 0 0-.021.438c.027.139.084.27.172.395a.82.82 0 0 0 .347.286c.141.058.303.084.486.079.186-.002.391-.03.616-.084a7.17 7.17 0 0 0 .741-.23c.287-.103.572-.183.857-.24a4.4 4.4 0 0 1 .831-.094c.419.01.805.093 1.16.249.354.155.657.41.907.764.217.306.348.623.393.95.045.322.018.64-.084.956-.1.32-.269.629-.507.927a4.48 4.48 0 0 1-.893.818 4.41 4.41 0 0 1-1.141.579 3.297 3.297 0 0 1-1.21.167 2.769 2.769 0 0 1-1.063-.295c-.327-.171-.618-.437-.873-.797l1.32-.934c.156.206.32.36.493.462.173.103.354.159.543.169.185.012.377-.019.574-.091a2.66 2.66 0 0 0 .602-.326c.179-.127.322-.259.43-.397.111-.141.188-.282.232-.423a.923.923 0 0 0 .033-.419.948.948 0 0 0-.167-.398Zm15.188-8.026-1.343.952-3.782-5.342-1.313 1.877-.82-1.157 2.257-3.242.072-.05 4.929 6.962Zm8.402-5.949-4.748 3.362-.643-.908.539-4.015c.04-.315.065-.594.075-.836a4.917 4.917 0 0 0-.008-.64 1.997 1.997 0 0 0-.096-.47 1.464 1.464 0 0 0-.539-.731 1.131 1.131 0 0 0-.407-.18 1.041 1.041 0 0 0-.432.02 1.22 1.22 0 0 0-.42.196 1.649 1.649 0 0 0-.419.412c-.1.143-.161.293-.183.452-.022.164-.005.337.051.517.056.18.15.365.283.553l-1.334.945a2.698 2.698 0 0 1-.455-2.083c.067-.358.21-.704.429-1.036a3.37 3.37 0 0 1 .885-.9c.354-.25.702-.422 1.043-.515.344-.095.672-.12.983-.072.308.05.599.167.873.352.272.18.515.422.729.725.163.23.282.476.357.738.077.257.122.534.136.83.011.299-.001.62-.035.965a21.64 21.64 0 0 1-.146 1.102l-.328 2.314 3.055-2.163.755 1.066Zm3.353-3.53a1.06 1.06 0 0 1-.197-.794c.041-.287.207-.533.497-.739.287-.203.571-.277.853-.224.286.052.517.202.693.45.176.25.238.517.186.802-.05.28-.216.52-.496.718-.284.2-.568.277-.851.228a1.026 1.026 0 0 1-.685-.44Zm9.564-5.615-1.344.951-3.782-5.341-1.313 1.877-.819-1.157 2.256-3.242.072-.05 4.93 6.962Zm-63.304 61.017-2.09 1.48.618 1.745-1.415 1.002-2.649-8.578 1.22-.863 7.167 5.378-1.415 1.002-1.436-1.166Zm-2.569.103 1.444-1.022-2.527-2.059 1.083 3.081Zm11.871-4.506-1.338.948-5.117-3.119 3.18 4.49-1.354.958-4.929-6.963 1.353-.958 5.088 3.11-3.161-4.474 1.349-.955 4.929 6.963Zm2.487-1.761-4.93-6.963 1.803-1.276c.322-.228.652-.402.989-.521a3.48 3.48 0 0 1 .998-.211 2.75 2.75 0 0 1 .844.056c.279.056.549.142.809.26.311.148.608.345.891.589.287.243.548.531.785.866l.407.574c.228.322.408.651.541.988.133.336.221.669.262.999.03.299.028.597-.005.894-.037.294-.109.57-.218.829-.125.303-.297.59-.517.861-.217.269-.48.512-.789.731l-1.87 1.324Zm-2.804-6.831 3.392 4.792.517-.366c.166-.117.305-.247.42-.39.114-.143.202-.296.263-.46a1.69 1.69 0 0 0 .102-.545 2.497 2.497 0 0 0-.068-.634 3.023 3.023 0 0 0-.223-.589 4.388 4.388 0 0 0-.376-.632l-.413-.583a3.891 3.891 0 0 0-.451-.535 2.939 2.939 0 0 0-.481-.406 2.164 2.164 0 0 0-.616-.282 1.79 1.79 0 0 0-.636-.067 1.819 1.819 0 0 0-.491.118 2.066 2.066 0 0 0-.49.261l-.449.318Zm17.716-5.357 3.261-2.309.769 1.086-4.61 3.264-4.93-6.963 1.349-.955 4.161 5.877Zm8.83-6.804-2.09 1.479.618 1.745-1.415 1.002-2.649-8.577 1.22-.864 7.167 5.378-1.415 1.002-1.436-1.165Zm-2.569.103 1.444-1.023-2.527-2.059 1.083 3.082Zm8.243-10.747-2.147 1.52 4.154 5.868-1.348.954-4.155-5.867-2.118 1.5-.776-1.095 5.615-3.975.775 1.095Zm8.268-1.626-2.859 2.025 1.391 1.965 3.343-2.366.768 1.085-4.691 3.322-4.93-6.963 4.677-3.311.776 1.095-3.329 2.356 1.243 1.755 2.86-2.025.751 1.062Zm5.502-3.22-1.018.72 1.842 2.602-1.344.951-4.93-6.962 2.334-1.653a4.498 4.498 0 0 1 1.145-.602c.376-.132.737-.19 1.085-.172.344.02.667.118.97.296.307.176.582.435.825.78.176.248.305.495.387.738a2.196 2.196 0 0 1 .02 1.408c-.07.226-.169.45-.3.671l3.532 1.815.044.062-1.439 1.02-3.153-1.675Zm-1.79-.37.994-.704c.208-.147.369-.304.485-.472a1.19 1.19 0 0 0 .204-.533c.02-.148.006-.298-.04-.452a1.501 1.501 0 0 0-.228-.464 1.579 1.579 0 0 0-.431-.426 1.018 1.018 0 0 0-.499-.178 1.272 1.272 0 0 0-.499.066c-.175.057-.355.15-.54.282l-.99.7 1.544 2.181Z"
                fill="#FFFCEA"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M212.09 87.166a.998.998 0 0 0 .367-.499c3.6-11.005 3.087-20.49-1.76-27.162-4.612-6.349-12.86-9.753-23.625-10.049-.04 0-.065.044-.041.077a.05.05 0 0 1-.011.067L67.584 135.554a.03.03 0 0 1-.043-.007c-.015-.021-.047-.015-.055.009-3.389 10.752-2.809 20.016 1.95 26.567 4.594 6.324 12.794 9.725 23.496 10.045a.992.992 0 0 0 .607-.185L212.09 87.166Zm-2.282 6.27c.411-.91-.624-1.732-1.436-1.151L99.43 170.227c-.805.577-.374 1.813.612 1.729a79.101 79.101 0 0 0 6.838-.89c17.381-3.008 38.051-12.005 57.809-26.358 19.758-14.353 34.703-31.229 42.938-46.829a81.57 81.57 0 0 0 2.181-4.444Zm-139.97 35.858c-.394.909.64 1.713 1.444 1.135l109.862-79.064c.8-.576.374-1.806-.609-1.73a78.766 78.766 0 0 0-7.281.927c-17.381 3.009-38.051 12.005-57.809 26.358-19.758 14.353-34.704 31.229-42.939 46.829a80.448 80.448 0 0 0-2.668 5.545Zm96.026 17.032c39.902-28.986 60.699-68.384 46.452-87.996-14.248-19.613-58.145-12.014-98.047 16.972-39.901 28.986-60.699 68.384-46.451 87.997 14.248 19.612 58.144 12.014 98.046-16.973Z"
                fill="#FFFCEA"
              ></path>
            </svg>
          </div>
          <Image src="/arc/browser-mmmhome-2.png" width={700} height={500} quality={100}/>
        </div>
      </div>
      {/* Temporary using HTML marquee. TODO: change using Marquee Magic UI */}
      <marquee
        behavior=""
        direction=""
        className="font-bold bg-[#FFFCED] text-[#3239FB] border-t-4 border-b-4 border-dashed border-[#3239FB] py-6 px-5 mb-0"
      >
        <a href="#" className="px-8">
          “Rethinking the fundamentals of how we use the web.”
        </a>
        <a href="#" className="px-8">
          “Arc is the best browser to come out in the last decade.”
        </a>
        <a href="#" className="px-8">
          “Arc is the new browser I’ve most enjoyed using.”
        </a>
        <a href="#" className="px-8">
          “Arc is a great name.”
        </a>
      </marquee>
    </section>
  );
};
