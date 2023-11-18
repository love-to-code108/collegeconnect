"use client";

// IMPORTING CSS
import "../globals.css"
import "./signUpPage.css"

// IMPORTING ALL THE IMPORTANT PACKAGES
import Link from "next/link";
import React from 'react';
import { useRouter } from "next/navigation";
import { axios } from "axios";


const signup = () => {



  return (
    <div>


      <div id="signUpPage" className="">

        {/* WHITE BOX */}
        <div id="signUpPageWhiteBox" className=" w-2/4 bg-white">

        </div>









        {/* GREY BOX */}

        <div id="signUpPageGreyBox" className=" w-2/4 bg-[#3E3E3E]">


          {/* THE SIGN UP WRITING AND THE FORM*/}
          <div className="signUpFormWrapper">




            <p className="signup ff-league text-8xl">SignUp</p>

            <div className="form ff-space">

              <div className="flex flex-col justify-between">
                <label htmlFor="Email" className="">Email</label>
                <input type="email" />
              </div>

              <div className="flex flex-col justify-between">
                <label htmlFor="Password">Password</label>
                <input type="password" />
              </div>

              <div className="flex flex-col justify-between">
                <label htmlFor="Password">Confirm Password</label>
                <input type="password" />
              </div>


            </div>

          </div>

        </div>










      </div>


    </div>
  )
}

export default signup