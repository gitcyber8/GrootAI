import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Mon", incidents: 14 },
    { name: "Tue", incidents: 22 },
    { name: "Wed", incidents: 18 },
    { name: "Thu", incidents: 31 },
    { name: "Fri", incidents: 27 },
  ]);
}