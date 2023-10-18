import {connect} from "@/dbConfig/dbConfig"
 import bcryptjs from "bcryptjs"
import { NextResponse, NextRequest} from "next/server"
import User from "@/models/userModel"
 

 connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {name,email,password}=reqBody
        console.log(reqBody);

        //check if user is there
        const user = await User.findOne({email})
        if(user){
             
            return NextResponse.json({error:"User already exist"},{status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);
        return NextResponse.json({message:"User is created Successfully",success:true,savedUser})
        



        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }

}
 