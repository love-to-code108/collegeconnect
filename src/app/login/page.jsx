"use client"

// IMPORTING CSS
import "../globals.css"
import "../signup/signUpPage.css"

import React from 'react'
import Link from "next/link";

const Login = () => {
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
                        <p className="signup ff-league text-8xl mb-8">Login</p>





                        {/* THE FORM */}

                        <div className="form ff-space">

                            <div className="flex flex-col justify-between">

                                <label htmlFor="Email" className=" text-xl">Email</label>
                                <input className="w-[24rem] h-[3rem] mb-4 text-black  px-4 "
                                    type="email"
                                />

                            </div>

                            <div className="flex flex-col justify-between">

                                <label htmlFor="Password" className=" text-xl">Password</label>
                                <input className="w-[24rem] h-[3rem] mb-4 text-black  px-4 "
                                    type="password"
                                />

                            </div>

                            <div className=" mt-4">
                                <p className=" text-white ff-space text-lg">Or create a account and <Link href="/signup" className=" text-[#FF0000]">Signup</Link></p>
                            </div>

                            <div className=" text-2xl px-4 py-2 ff-space border-2 text-white ml-[16rem] mt-[2rem] hover:cursor-pointer hover:text-[#3E3E3E] hover:bg-white
                             flex justify-center items-center">
                                <p>
                                    Login
                                </p>
                            </div>

                        </div>








                    </div>

                </div>










            </div>


        </div>
    )
}

export default Login