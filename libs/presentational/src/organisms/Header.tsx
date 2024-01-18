// 'use client';

import Logo from '@presentational/molecules/Logo';
import Help from '../assets/icon/help.svg';

function Header() {
  return (
    // <header>
    //   <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    //       <a href="https://flowbite.com" className="flex items-center">
    //         <img
    //           src={logo.src}
    //           className="mr-3 h-6 sm:h-9"
    //           alt="Flowbite Logo"
    //         />
    //         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //           Flowbite
    //         </span>
    //       </a>
    //       <div className="flex items-center lg:order-2">
    //         <a
    //           href="#"
    //           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    //         >
    //           Log in
    //         </a>
    //         <button
    //           data-collapse-toggle="mobile-menu-2"
    //           type="button"
    //           className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           aria-controls="mobile-menu-2"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //           <svg
    //             className="hidden w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //         </button>
    //       </div>
    //       <div
    //         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    //         id="mobile-menu-2"
    //       >
    //         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Company
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Marketplace
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Features
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Team
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header>
      <nav className="bg-white px-[30px] py-[18px]">
        <div className="flex flex-wrap justify-between items-center max-w-full min-w-full">
          <Logo />
          {/* <div
            className="hidden justify-between items-center w-full md:flex lg:w-auto "
            // id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black bg-white-700 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Hỗ trợ
                </a>
              </li>
            </ul>
          </div> */}
          <div className="flex items-center justify-center md:gap-[40px]">
            <button className="hidden md:block text-black text-[16px] font-semibold md:font-bold md:py-[0.85rem] lg:py-[0.6rem]  ">
              {/* <img src={Help.src} /> */}
              <span className="inline">Hỗ trợ</span>
            </button>
            <button className="hidden md:block text-black text-[16px] font-semibold md:font-bold md:py-[0.85rem] lg:py-[0.6rem]  ">
              Trở thành Freelancer
            </button>
            <button className="hidden md:block text-black text-[16px] font-semibold md:font-bold md:py-[0.85rem] lg:py-[0.6rem]  ">
              Chính sách
            </button>
            <button className=" text-black text-[16px] font-semibold md:font-bold md:px-[2.28rem] md:py-[0.85rem] lg:px-[1.6rem] lg:py-[0.6rem] md:border-solid md:border-3 md:border-black rounded-md ">
              Đăng nhập
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-2 text-sm text-black md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    // <header>
    //   <nav className="bg-white py-[2rem] md:px-[2.42rem] lg:px-6 md:pt-[16px] lg:pt-[16px] ">
    //     <div className="flex flex-wrap md:justify-between items-center max-w-full min-w-full">
    //       <a href="#" className="flex items-center ">
    //         <img
    //           src={logo.src}
    //           className="mr-[18px] md:block md:h-[50px] lg:h-[50px] md:mr-[1.29rem] lg:mr-[0.9rem]"
    //           alt="DeToi Logo"
    //         />
    //         <span className="self-center md:inline text-[20px] md:text-[20pxrem] lg:text-[1rem] font-semibold whitespace-nowrap underline italic">
    //           DeToi
    //         </span>
    //         {/* <span className="self-center md:hidden text-[2rem] font-semibold whitespace-nowrap ">
    //           DeToi
    //         </span> */}
    //       </a>

    //       <div className="hidden md:flex lg:flex items-center">
    //         <button className="text-black md:text-[16px] lg:text-[0.8rem] font-bold md:px-[2.28rem] md:py-[0.85rem] lg:px-[1.6rem] lg:py-[0.6rem] border-solid border-3 border-black rounded-md ">
    //           Đăng nhập
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Header;
