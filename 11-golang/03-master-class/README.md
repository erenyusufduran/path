# Master Class

How to design, develop and deploy with PostgreSQL, Go, Docker.

The service that we are going to build is a simple bank. It will provide APIs for the frontend to do following things:
- Create and manage account (Owner, balance, currency)
- Record all balance changes (Create an account entry for each change)
- Money transfer transaction (Perform money transfer between 2 accounts consistently within a transaction)

### To install setup environment on Windows:

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