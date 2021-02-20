### To develop in parallel:
1. `npm run buttons-build-watch`
2. `ng serve`

### To generate component under the project:
`ng generate component main-page --project=hb-dev` or `ng generate component main-page --project=@obaranovskyi/hb-angular-buttons`

### To publish package:
  - `cd hb-angular`
  - `npm run buttons-build-prod`
  - Add licence to `./dist/obaranovskyi/hb-angular-buttons/package.json` - "licence": "MIT",
  - Increase version
  - `cd ./dist/obaranovskyi/hb-angular-buttons`
  - `npm publish --access=public`
