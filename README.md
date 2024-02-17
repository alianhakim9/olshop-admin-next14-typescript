## Getting Started

First, run

`npm install OR yarn install`

Docker setup

```
docker-compose up -d
```
Database setup
```
> docker exec -it <container_id> bash
> mongo
> use olshop
> db.createUser({
  user: "your-unique-username",
  pwd: "your-strong-password",
  roles: ["readWrite", "dbAdmin"]
});
```
Setup ENV
```
DATABASE_URL="mongodb://your-unique-username:your-strong-password@localhost:27017/olshop"
```
Prisma setup
```
npx prisma db push
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Maintenance By

https://github.com/alianhakim9
