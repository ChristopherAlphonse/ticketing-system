To get started with Help Pilot, follow these steps:

### replace the information in the .env file and also create a .env.local and add the same information in.

Before opening a new pull request, try searching through the [issues](https://github.com/ChristopherAlphonse/ticketing-system/issues) tracker for known issues or fixes.

1. Install dependencies:

```bash
pnpm i
```

Run the development server:

```sh
pnpm dev
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
