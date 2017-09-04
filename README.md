# Shared Assets

1. Install Yarn (https://yarnpkg.com/lang/en/docs/install/)
1. Clone this repo locally
1. Go to the local checkout, run "yarn install". This will install all the required packages in package.json. The packages will be stored in "node_modules"
1. Next, run "yarn run build". This uses Webpack to bundle the assets and produce the output. The output will be stored in "dist"
1. Open "dist/index.html". The navbar will be red.
1. Run "yarn remove appen_global_assets". This will remove our shared private package from package.json and the downloaded packages. The default version was 0.1.0
1. Run "yarn add https://github.com/Appen/appen_global_assets#0.1.1". This will add the updated version of the shared private package.
1. Run "yarn run build" and open "dist/index.html". The navbar will now be blue.
