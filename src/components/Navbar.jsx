import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="border-grey-300 rounded-md border bg-white shadow">
        <div className="m-auto flex w-[90%] items-center justify-between p-4">
          <div className="flex">
            <p className="px-2 font-semibold text-lg text-gray-800">
              Covid-19 Tracker
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>
          </div>
          <ul className="hidden justify-around sm:flex">
            <li>
              <a
                href="https://www.who.int/health-topics/coronavirus#tab=tab_3"
                className="ray-800 rounded-md px-4 py-2 text-sm font-semibold"
              >
                Symptoms
              </a>
            </li>
            <li>
              <a
                href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-how-is-it-transmitted"
                className="rounded-md px-4 py-2 text-sm font-semibold text-gray-800"
              >
                Preventions
              </a>
            </li>
            <li>
              <a
                href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
                className="rounded-md px-4 py-2 text-sm font-semibold text-gray-800"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
                className="rounded-md px-4 py-2 text-sm font-semibold text-gray-800"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-gray-100"
              >
                Code on github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
