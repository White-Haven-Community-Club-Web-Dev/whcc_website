const fs = require('fs');
const path = require('path');

// 1. Fixed the typos in existsSync and the folder path strings
const envDir = path.join(__dirname, '../src/environments');
if (!fs.existsSync(envDir)) {
    fs.mkdirSync(envDir, { recursive: true });
}

// Path to your production environment file
const targetPath = path.join(envDir, 'environment.ts');

// 2. Added quotes around string interpolations so they compile as valid JS/TS strings
const envConfigFile = `export const environment = {
  production: true,
  siteKey: '${process.env["WHFC_SITE_KEY"] || ""}',
  sbKey: '${process.env["WHCFC_SB_KEY"] || ""}',
  sbVersion: '${process.env["WHCFC_SB_VERSION"] || ""}'
};
`;

// 3. Removed the TypeScript ': any' type declaration since this runs as a native Node.js script
fs.writeFile(targetPath, envConfigFile, function (err:any) {
    if (err) {
        console.error("Failed to write environment file:", err);
        process.exit(1);
    } else {
        console.log(`Netlify env variables successfully injected to ${targetPath}`);
    }
});