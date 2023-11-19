# Help Pilot - IN PROGRESS

## WORK in progress official readme will be re-written once completed

## IT ticketing system

- Tech stack : NextJs, Tailwind CSS, Prisma ORM, MYSQL Database

## Recommended: Tools

- Download [MysQL](https://dev.mysql.com/downloads/mysql/)
- Download [DataGrip](https://www.jetbrains.com/datagrip/)
- Download [Vs Code IDE](https://code.visualstudio.com/)
- Download [Git](https://git-scm.com/)

## Getting Started

First, run the development server:

```bash
pnpm i && pnpm dev

```

## updating packages

**_To upgrade all packages_**

```sh
pnpm up-all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(default)`. The page auto-updates as you edit the file.

npx prisma db push
npx prisma generate
npx prisma studio

to format:
npx prisma format

Utilize: npx prisma studio if you want to access the database and do not want to install DataGrip
you will will in the terminal `Prisma Studio is up on http://localhost:5555`

DB: My sql setup for [Prisma](https://www.prisma.io/docs/concepts/database-connectors/mysql)
