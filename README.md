# Help Pilot - Read me file in working progress

## Overview

## to-o:Dashboard, CRUD operation, Auth, Admin/roles



Please note that this README is currently a work in progress, and the official version will be rewritten upon completion.

## Tech Stack

- Next.js
- Tailwind CSS
- Prisma ORM
- MySQL Database

## Recommended Tools

To facilitate seamless development and usage of Help Pilot, we recommend the following tools:

- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [DataGrip](https://www.jetbrains.com/datagrip/)
- [Vs Code IDE](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

## Getting Started

To get started with Help Pilot, follow these steps:

1. Install dependencies:

```bash
pnpm i
```

Run the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## updating packages

To upgrade all packages to their latest versions, use the following command:

```sh
pnpm up-all
```

### Database Operations

####

Push Database Changes

Run the following commands to apply database changes:

```sh
npx prisma db push
```

#### Generate Prisma Client

Generate the Prisma client to enable seamless interaction with the database:

```sh
npx prisma generate
```

#### Prisma Studio

Launch Prisma Studio for a visual representation of the database:

```sh
npx prisma studio
```

#### Formatting

Use the following command to format Prisma schema files:

```sh
npx prisma format
```

#### Migration

To create and apply database migrations, run

```sh
npx prisma migrate
```

The migration script will be created in the `prisma/migrations/migration.sql` folder.

Database Access without DataGrip
If you prefer not to install DataGrip, you can use Prisma Studio directly from the terminal:

```sh
npx prisma studio
```

Access Prisma Studio at http://localhost:5555 in your browser.

MySQL Setup for Prisma
For MySQL setup details with Prisma, refer to the [Prisma Documentation.](https://www.prisma.io/docs/concepts/database-connectors/mysql)
