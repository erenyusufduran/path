package main

import (
	"net/http"

	"github.com/erenyusufduran/toolkit"
)

func (app *Config) SendMail(w http.ResponseWriter, r *http.Request) {
	type mailMessage struct {
		From    string `json:"from"`
		To      string `json:"to"`
		Subject string `json:"subject"`
		Message string `json:"message"`
	}

	var t toolkit.Tools
	var requestPayload mailMessage

	err := t.ReadJSON(w, r, &requestPayload)
	if err != nil {
		t.ErrorJSON(w, err)
		return
	}

	msg := Message{
		From:    requestPayload.From,
		To:      requestPayload.To,
		Subject: requestPayload.Subject,
		Data:    requestPayload.Message,
	}

	err = app.Mailer.SendSMTPMessage(msg)
	if err != nil {
		t.ErrorJSON(w, err)
		return
	}

	payload := toolkit.JSONResponse{
		Error:   false,
		Message: "sent to: " + requestPayload.To,
	}
	t.WriteJSON(w, http.StatusAccepted, payload)
}
