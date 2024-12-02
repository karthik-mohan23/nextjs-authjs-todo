import { NextResponse } from "next/server";

export const GET = async () => {
  return new NextResponse("Hey thats me", {
    status: 200,
  });
};
