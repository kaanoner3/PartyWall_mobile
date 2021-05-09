# PartyWall_mobile


Project Setup

Before start setting up the PartyWall_mobile application please follow the PartyWall (backend) setup instruction 

Install expo-cli if it doesn't exist. "npm install --global expo-cli"

Run "npm run relay" to generate code to represent our queries and mutations.

Run "expo start" and select "run on ios simulator" in the appearing browser.

(There is no specific configuration for ios, so I expect that the application can work on Android properly,
but I am not sure because I couldn't test it on both the phone and the emulator).

Things that I would implement If I have more time;

1) I would add loading indicator for mutations and queries. The system supports it but I couldn't add the loading indicator to the screens.
2) I would improve error handlings. That could have done by implementing a generic error handler provider.
3) I would add form validations using React Hook Form or Formik
4) I think the design is looking decent, but color picking and user interface need more work to look more impressive.
5) I would add unit tests for mutations and queries
6) I would add api url to the .env file 
