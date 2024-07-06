# Master Class

How to design, develop and deploy with PostgreSQL, Go, Docker.

The service that we are going to build is a simple bank. It will provide APIs for the frontend to do following things:
- Create and manage account (Owner, balance, currency)
- Record all balance changes (Create an account entry for each change)
- Money transfer transaction (Perform money transfer between 2 accounts consistently within a transaction)

#### To install setup environment on Windows:

```sh
wsl --install
- Install windows terminal
sudo apt-update
make -version
sudo apt install make
sudo snap install go --classic
go version
sudo snap install sqlc 
```

Install Visual Studio Code;
- install WSL as an extension.
- install Go as an extension.
- install Docker Desktop WSL 2
- look go is still there, if go version gives an error, delete docker and execute this command at Downloads to install Docker again;
    ```sh
        Start-Process "Docker Desktop Installer.exe" -Verb RunAs -Wait -ArgumentList "install --installation-dir=C:\Docker\"
    ```

#### Docker & Postgres & TablePlus to create DB Schema

```sh
docker pull postgres:12-alpine # to pull an image from dockerhub
docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine # to run a container
docker ps # to see containers
docker exec -it postgres12 psql -U root # to run command in container
docker logs postgres12 # to view container logs
```

#### To create DB Schema

```sql
CREATE TABLE "accounts" (
"id" bigserial PRIMARY KEY,
"owner" varchar NOT NULL,
"balance" bigint NOT NULL,
"currency" VARCHAR NOT NULL,
"created_at" timestamptz NOT NULL DEFAULT (now())
)

CREATE TABLE "entries" (
"id" bigserial PRIMARY KEY,
"account_id" bigint NOT NULL,
"amount" bigint NOT NULL,
"created_at" timestamptz NOT NULL DEFAULT (now())
)

CREATE TABLE "transfers" (
"id" bigserial PRIMARY KEY,
"from_account_id" bigint NOT NULL,
"to_account_id" bigint ,
"amount" bigint NOT NULL,
"created_at" timestamptz NOT NULL DEFAULT (now())
)

ALTER TABLE "entries" ADD FOREIGN KEY ("account_id") REFERENCES "accounts" ("id");
ALTER TABLE "transfers" ADD FOREIGN KEY ("from_account_id") REFERENCES "accounts" ("id");
ALTER TABLE "transfers" ADD FOREIGN KEY ("to_account_id") REFERENCES "accounts" ("id");

CREATE INDEX ON "accounts" ("owner");
CREATE INDEX ON "entries" ("account_id");
CREATE INDEX ON "transfers" ("from_account_id");
CREATE INDEX ON "transfers" ("to_account_id");
CREATE INDEX ON "transfers" ("from_account_id","to_account_id");

COMMENT ON COLUMN "entries"."amount" IS 'can be negative or positive';
COMMENT ON COLUMN "transfers"."amount" IS 'must be positive';
```