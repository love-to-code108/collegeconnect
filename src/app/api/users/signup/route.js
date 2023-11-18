import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel.js"
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST (NextRequest){

    try{

        const reqBody = await request.json();
        const { userName , email , password } = reqBody

        console.log(reqBody);

    }catch(error){

        return NextResponse.json(
            {error:error.message},
            {status: 500})

    }
}