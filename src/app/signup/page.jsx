"use client";

// IMPORTING CSS
import "../globals.css"
import "./signUpPage.css"

// IMPORTING ALL THE IMPORTANT PACKAGES
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { axios } from "axios";


const Signup = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // console.log(confirmPassword);

  // THE SIGNUP FUNCTION TO SIGN IN THE USER
  // BASICALLY CREATE A NEW USER IF THE USER DOESNOT ALREADY EXIST
  const signUp = async () => {

  }



  return (
    <div>


      <div id="signUpPage" className="">

        {/* WHITE BOX */}
        <div id="signUpPageWhiteBox" className=" w-2/4 bg-white flex justify-center items-center">

          <div className=" ff-league text-[12rem] text-[#37366A]">
            <p>College</p>
            <p className="text-6xl relative bottom-16 left-14">Connect</p>
          </div>

        </div>









        {/* GREY BOX */}

        <div id="signUpPageGreyBox" className=" w-2/4 bg-[#3E3E3E]">


          {/* THE SIGN UP WRITING AND THE FORM*/}
          <div className="signUpFormWrapper">



            {/* THE SIGNUP WRITING */}
            <p className="signup ff-league text-8xl mb-16">SignUp</p>





            {/* THE FORM */}

            <div className="form ff-space">


              {/* EMAIL */}

              <div className="flex flex-col justify-between">

                <label htmlFor="Email" className=" text-xl">Email</label>
                <input className="w-[24rem] h-[3rem] mb-4 text-black  px-4 focus:outline-none" type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(() => e.target.value)}
                />

              </div>


              {/* PASSWORD */}

              <div className="flex flex-col justify-between">

                <label htmlFor="Password" className=" text-xl">Password</label>
                <input className="w-[24rem] h-[3rem] mb-4 text-black  px-4 focus:outline-none" type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(() => e.target.value)}
                />

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="flex flex-col justify-between">

                <label htmlFor="Password" className=" text-xl">Confirm Password</label>
                <input className="w-[24rem] h-[3rem] mb-4 text-black  px-4 focus:outline-none" type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(() => e.target.value)}
                />

              </div>


              <div className=" mt-4">
                <p className=" text-white ff-space text-lg">Or <Link href="/login" className=" text-[#FF0000]">Login</Link></p>
              </div>

            </div>


            <div className=" text-2xl px-4 py-2 ff-space border-2 text-white ml-[16rem] hover:cursor-pointer hover:text-[#3E3E3E] hover:bg-white"
            onClick={signUp}>
              <p>
                SignUp
              </p>
            </div>







          </div>

        </div>










      </div>


    </div>
  )
}

export default Signup