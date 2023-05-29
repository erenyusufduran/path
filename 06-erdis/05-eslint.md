# ESLint

## EMT Worker

Prettierda bir sıkıntı var, ESLint ise bizim kurallarımıza uyuyor. ESLint kod kalitemizi geliştirmeye daha açık.

Mesela else öncesinde boşluk bırakmayınca bize hata veriyor, ama alt satıra alabiliyoruz.

Settings içerisinde

```
settings.json

"eslint.validate": ["javascript"]
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}

extensions.json
"recommendations": ["dbaeumer.vscode-eslint"]
```

ESLint extension'ını indirmeliyiz.

Code Formatter olmasının yanı sıra, koddaki hatalarımızı da söylüyor.

---
