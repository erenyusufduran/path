FROM golang:1.22

WORKDIR /app
COPY . ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /frontEndApp ./cmd/web

CMD ["/frontEndApp"]