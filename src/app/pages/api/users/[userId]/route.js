import { NextResponse } from "next/server";

export const GET = (request) => {
    const users = [
        { name:'Ginny', email: 'ginny@gmail.com', course: 'React' },
        { name:'Bela', email: 'bela@gmail.com', course: 'Angular' },
        { name:'kate', email: 'kate@gmail.com', course: 'Vue' },
    ];
    return NextResponse.json(users)
}
export const POST = () => {

}
export const PUT = () => {

}
export const DELETE = (request, {params}) => {
    
    console.log(params)

    // const userId = params.userId;
    const { userId } = params;
    console.log('userId - ', userId)
    
    // response
    return NextResponse.json({
        message:'dynamic api -> deleted',
        status:true,
    },{status:202, statusText:'success'})
}