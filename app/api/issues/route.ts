import { NextRequest, NextResponse } from 'next/server';
import { createIssueSchema } from '@app/validationSchema';
import prisma from '@prisma-file';
import { z } from 'zod';

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

export type Issues = z.infer<typeof createIssueSchema>;
