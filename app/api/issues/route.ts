import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import prisma from "../../../prisma/prisma";
import { createIssueSchema } from "../../validationSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const issue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(issue, { status: 201 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json(['hello world'], {status: 200});
}

export type Issues = z.infer<typeof createIssueSchema>;
