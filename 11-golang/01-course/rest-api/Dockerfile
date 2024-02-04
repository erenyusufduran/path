FROM golang:1.18

WORKDIR /go/src/app

COPY . .

RUN go build -o rest-api main.go

CMD ["./rest-api"]

# docker build  -t rest-api .
# docker run --rm -p 8080:8080 rest-api