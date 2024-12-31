import { ContentSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = ContentSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const newJournal = await prisma.home.create({
    data: { content: body.content }
  })
  return NextResponse.json(newJournal, { status: 201 })
}