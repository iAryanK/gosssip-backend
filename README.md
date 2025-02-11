## Running Locally

> [!NOTE]  
> This project uses [pnpm](https://pnpm.io/) only as a package manager.

1. Clone the repository:

```bash
git clone https://github.com/iAryanK/gosssip-backend.git
```

2. Navigate to the project directory:

```bash
cd ./gosssip
```

3. Create a .env.development file & Copy the below environment variables to `.env.development`.

```bash
PORT = 3000
NODE_ENV = "development"
JWT_SECRET = "TopSecret"
```

4. Create .env file and paste your database uri to connect to your database. Refer to prisma docs to connect database of your choice.

```bash
DATABASE_URL=
```

5. Install dependencies:

```bash
pnpm install
```

6. Run database migrations using the following code

```bash
npx prisma migrate deploy
```

7. Generate prisma client (to query to database)

```bash
npx prisma generate
```

8. Start the development server:

```bash
pnpm dev
```

9. Access the application in your browser:

```bash
http://localhost:3000
```

10. Available api endpoints

```
1. [POST] /api/users/signup (requires email and password in request body)
2. [POST] /api/users/login (requires email and password in request body)
3. [GET] /api/users/:email (requires email in endpoint)
4. [GET] /api/users/id/:id (requires user's id in endpoint)
```
