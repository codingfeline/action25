import { ContentSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json()
  const validation = ContentSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const content = await prisma.home.findUnique({
    // const id = await (params).id
    where: { id: (await (params)).id }
  })

  if (!content)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 })

  console.log(body)
  const updatedContent = await prisma.home.update({
    where: { id: content.id },
    data: {
      content: body.content,
    }
  })

  return NextResponse.json(updatedContent)
}

export async function DELETE(request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const journal = await prisma.home.findUnique({
    where: { id: (await params).id }
  })

  if (!journal)
    return NextResponse.json({ error: 'Invalid journal' }, { status: 404 })

  await prisma.home.delete({
    where: { id: journal.id }
  })

  return NextResponse.json({})
}
