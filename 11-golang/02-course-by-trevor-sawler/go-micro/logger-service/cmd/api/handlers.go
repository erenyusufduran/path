package main

import (
	"log-service/data"
	"net/http"

	"github.com/erenyusufduran/toolkit"
)

var t toolkit.Tools

type JsonResponse struct {
	Error   bool
	Message string
	Data    any
}

type JSONPayload struct {
	Name string `json:"name"`
	Data string `json:"data"`
}

func (app *Config) WriteLog(w http.ResponseWriter, r *http.Request) {
	var requestPayload JSONPayload
	err := t.ReadJSON(w, r, &requestPayload)
	if err != nil {
		t.ErrorJSON(w, err)
		return
	}

	event := data.LogEntry{
		Name: requestPayload.Name,
		Data: requestPayload.Data,
	}

	err = app.Models.LogEntry.Insert(event)
	if err != nil {
		t.ErrorJSON(w, err)
		return
	}

	resp := JsonResponse{
		Error:   false,
		Message: "logged",
	}

	t.WriteJSON(w, http.StatusAccepted, resp)
}
