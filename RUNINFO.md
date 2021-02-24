### To develop in parallel:
1. `npm run build:buttons:watch`
2. `ng serve`

### To build global styles run:
`npm run build:scss`


### To generate component under the project:
`ng generate component main-page --project=hb-dev` or `ng generate component main-page --project=@obaranovskyi/hb-angular-buttons`

### To publish package:
  - `cd hb-angular`
  - `npm run buttons-build-prod`
  - Add license to `./dist/obaranovskyi/hb-angular-buttons/package.json` - "license": "MIT",
  - Add license file (copy from the root directory)
  - Increase version
  - `cd ./dist/obaranovskyi/hb-angular-buttons`
  - `npm publish --access=public`
