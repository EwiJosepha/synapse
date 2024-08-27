
import { NextResponse, type NextRequest } from "next/server";
import { verify } from "./utils/pathMabager";
import { baseUrl } from "@/providers/constants/constants";

export default function middleware(req: NextRequest) {


  const verify1 = verify

  const url = req.url

  if (!verify1 && url.includes("/dashboard")) {
    return NextResponse.redirect(baseUrl + "/login")
  }

  if (verify1 && url === `http://localhost:3001/login`) {
    return NextResponse.redirect("http://localhost:3001/dashboard")
  }

  if(verify1 && url === "http://localhost:3001/register") {
    return NextResponse.redirect("http://localhost:3001/login")
  }
}
