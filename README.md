# Delaware River Basin Story
A visualization that tells the story of the Delaware River Basin (DRB). The people and industries that live in the 
DRB need water, and the riverways and estuary where the river meets the ocean supports important ecosystems that
have special species and habitat.  In order for humans, society, and ecosystems to all get the water they need, 
the system needs to stay balanced - no one takes more than they need, and we release what extra we have back into the basin. 

## The Code
The project is Open Source and uses the Vue JavaScript framework in conjunction with animated Scalable Vector
Graphics (SVG) and raster graphics. The build process uses the Jenkins task 
runner and Docker containerisation.

## Project Setup
- Clone the project to your local system
- `cd` to the cloned directory
- Download the Node Package Manager(NPM) dependencies by running `npm install` in your terminal window
- Start the project by running `npm run serve` -- the address of the project will show on completion usually `localhost:8080`
- Start your browser, enter the address found above
- And that's it, easy peasie

### Notes on Setup
- You will need 'node.js' installed on your system
- If you run into trouble starting the project, it is usually fixed by running `npm rebuild node-sass`
- The Windows operating system does not like our environment variables and messes up the local build.

To fix that, do the following: 
- Open the 'package.json' at the root of the project
- Go to the 'scripts' name value pair
- Go to the 'serve' name value pair
- Delete `NODE_ENV=development` from that value
- That value should now look like `"serve": "vue-cli-service serve --mode test_tier",`
- Run `npm run serve` again, and the project should start

On Windows -
You might get this error when running ``npm run serve``

``'vue-cli-service' is not recognized as an internal or external command,
  operable program or batch file.``
  
- To fix, run ``npm install @vue/cli-service -g`` to install the Vue CLI-Service globally.

