require('dotenv').config()
const setEnv = () => {
    const fs = require('fs');

    const writeFile = fs.writeFile;
    // Configure Angular `environment.ts` file path
    const targetPaths = ['./src/environments/environment.development.ts', './src/environments/environment.ts'];

    // `environment.ts` file structure
    const envConfigFile = `export const environment = {
  production: true,
  siteKey: "${process.env['SITE_KEY']}",
  sbKey:${process.env['SB_KEY']}
};
`;
    console.log('The file `environment.ts` will be written with the following content: \n');
    targetPaths.forEach(path => {
        writeFile(path, envConfigFile, (err: any) => {
            if (err) {
                console.error(err);
                throw err;
            } else {
                console.log(`Angular environment.ts file generated correctly at ${path} \n`);
            }
        });
    });
};

setEnv();
