
import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectDB();

export const GET = (request) => {
    const users = [
        { name:'Jhon', email: 'jhon@gmail.com', course: 'HTML' },
        { name:'Jacob', email: 'jacob@gmail.com', course: 'CSS' },
        { name:'Jimmy', email: 'jimmy@gmail.com', course: 'JavaScript' },
    ];
    return NextResponse.json(users)
}
export const POST = async (request) => {
    const body = request.body
    console.log(body)
    console.log(request.method)
    // console.log(request.cookies)
    // console.log(request.headers)

    console.log(request.nextUrl.pathname)   // get request path 
    console.log(request.nextUrl.searchParams)

    const jsonData = await request.json();
    console.log(jsonData)

    return NextResponse.json({
        message:'posting user data',
    })
}
export const PUT = () => {

}
export const DELETE = (request) => {
    console.log('delete api called')
    return NextResponse.json({
        message:'deleted',
        status:true,
    },{status:201, statusText:'success'})
}