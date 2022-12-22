import { NextResponse } from "next/server";

export default function middleware(req) {
    let verify = localStorage.getItem("access_token");
    let url = req.url

    if (!verify && url.includes("/home")) {
        return NextResponse.redirect("/login");
    }
}