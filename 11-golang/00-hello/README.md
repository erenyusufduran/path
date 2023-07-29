go mod init example/hello

- go mod edit -replace example.com/greetings=../greetings
  - Gives the correct repo for module

- go mod tidy -> run the go mod tidy command to synchronize the example.com/hello module's dependencies, adding those required by the code, but not yet tracked in the module.

- go run .
