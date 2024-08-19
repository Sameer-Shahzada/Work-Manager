import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const {userId, postId} = params;
    console.log('user id', userId)
    console.log('user id', postId)
    return NextResponse.json(params)
}