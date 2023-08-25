import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request : NextRequest){
    try{
        const reqBody = await request.json();
        const { username , email , password } = reqBody
        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({
                status : 400,
                messege : "User already exists",
                data : null
            })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password : hashPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser)
        return NextResponse.json({
            status : 200,
            messege : "User Created Successfully",
            data : savedUser
        })
    }
    catch(err : any){
        return NextResponse.json({
            status : 500,
            messege : err,
            data : null
        })
    }
}