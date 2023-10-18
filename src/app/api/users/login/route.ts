 
import { connect } from "@/dbConfig/dbConfig"
import bcryptjs from "bcryptjs"
import { NextResponse, NextRequest } from "next/server"
import User from "@/models/userModel"
import jwt from "jsonwebtoken"

connect()
export async function POST(request: NextRequest) {


    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;

        //Check if user exist
        const user = await User.findOne({ email })
        console.log(reqBody);
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }
        //Check wheather password is correct or not
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error:"Invalid Password"},{status:400})
        }

        //create token data
        const tokenData = {
            id:user._id,
            name:user.name,
            email:user.email
        }

        //create token 
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!, {expiresIn:"1d"})
        const response = NextResponse.json({
            message:"Login Successful",
            success:true,
        })
        response.cookies.set("token",token,{
            httpOnly:true,
          
        })
        return response;


        

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}