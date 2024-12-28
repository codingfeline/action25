import { ContactSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = ContactSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const newMessage = await prisma.contact.create({
    data: { name: body.name, email: body.email, message: body.message }
  })
  return NextResponse.json(newMessage, { status: 201 })
}