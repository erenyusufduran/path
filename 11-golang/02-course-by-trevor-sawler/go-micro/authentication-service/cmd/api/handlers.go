package main

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/erenyusufduran/toolkit"
)

type JsonResponse struct {
	Error   bool
	Message string
	Data    any
}

func (app *Config) Authenticate(w http.ResponseWriter, r *http.Request) {
	var t toolkit.Tools

	var requestPayload struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := t.ReadJSON(w, r, &requestPayload)
	if err != nil {
		t.ErrorJSON(w, err, http.StatusBadRequest)
		return
	}

	user, err := app.Models.User.GetByEmail(requestPayload.Email)
	if err != nil {
		t.ErrorJSON(w, errors.New("invalid credentials"), http.StatusBadRequest)
		return
	}

	valid, err := user.PasswordMatches(requestPayload.Password)
	if err != nil || !valid {
		t.ErrorJSON(w, errors.New("invalid credentials"), http.StatusBadRequest)
		return
	}

	payload := JsonResponse{
		Error:   false,
		Message: fmt.Sprintf("Logged in user %s", user.Email),
		Data:    user,
	}

	t.WriteJSON(w, http.StatusAccepted, payload)
}
