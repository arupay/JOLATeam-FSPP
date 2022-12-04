import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";

  const logout = async (e) => {
    e.preventDefault();
    try {
      setAuth({});

      toast.success("Logout successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      // After validate credentials, proceed to redirect to /
      setTimeout(() => {
        navigate("/");
      }, 1050);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    // <div className="h-full bg-yellow-200">
    //   <ToastContainer />
    //   <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
    //     <h2 className=" font-extrabold text-black sm:text-4xl">
    //       <span className="block  text-gray-500 text-4xl md:text-6xl my-20 py-0 leading-0">
    //         <b className="px-4 py-2 mt-2 text-4xl md:text-6xl bg-orange-500 text-white no-italic rounded-md shadow">
    //           Dashboard
    //         </b>
    //       </span>
    //       <span className="block text-4xl md:text-6xl text-gray-600">
    //         Welcome back{" "}
    //         <b className="text-orange-600 uppercase">{auth?.firstName} </b>
    //       </span>
    //     </h2>
    //     <div className="mt-12 inline-flex rounded-md shadow">
    //       <button
    //         onClick={(e) => logout(e)}
    //         type="button"
    //         className="py-3 px-6 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-3xl "
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div class="h-full bg-smaksalmon">
      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
          <div class="w-full md:w-3/12 md:mx-2 ">
            <div class="bg-white p-3 rounded border-t-4 border-yellow-200">
              <div class="">
                <img
                  class="h-auto w-full mx-auto"
                  src="https://fakeface.rest/face/view/55?gender=male"
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                Michel Cajamarca
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                SMAK Newbie
              </h3>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Most Recent SMAK:</span>
                  <span class="ml-auto">Nov 07, 2022</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">Miguel</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">Cajamarca</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">+11 998001001</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Home Address</div>
                    <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Work Address</div>
                    <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        jane@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit Profile Information
              </button>
            </div>

            <div class="my-4"></div>

            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Recent Orders</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600">Cabo Rockville Centre</div>
                      <div class="text-gray-500 text-xs">Date</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Pio Pio 8 Hell's Kitchen</div>
                      <div class="text-gray-500 text-xs">Date</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Recent Reviews</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600">Cabo Rockville Centre</div>
                      <div class="text-gray-500 text-xs">Date</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Pio Pio 8 Hell's Kitchen</div>
                      <div class="text-gray-500 text-xs">Date</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="my-4"></div>

            <div class="bg-white p-3 hover:shadow">
              <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span class="text-green-500">
                  <svg
                    class="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Badges</span>
              </div>
              <div class="grid grid-cols-3">
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/T1PX3tc/bocaphe.png"
                    alt=""
                  />
                  <a href="#" class="text-main-color">
                    BoCaphe
                  </a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/d22pD9z/Boqueria-Soho.png"
                    alt=""
                  />
                  <a href="#" class="text-main-color">
                    Boqueria Soho
                  </a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://i.ibb.co/zb1fKHF/Jackswifefrieda.png"
                    alt=""
                  />
                  <a href="#" class="text-main-color">
                    Jack's Wife Frieda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
