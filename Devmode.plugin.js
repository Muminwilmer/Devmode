/**
 * @name DevMode
 * @description Description Here :O
 * @version 1.0.0
 * @author Muminwilmer#6034
 * @updateUrl https://raw.githubusercontent.com/Muminwilmer/Devmode/main/Devmode.plugin.js
 */

// config
const config = {
    info: {
        name: "Dev Mode",
        id: "Devmode",
        description: "Devmode thingy",
        version: "80085", 
        author: "Muminwilmer",
        updateUrl: "https://raw.githubusercontent.com/Muminwilmer/Devmode/main/Devmode.plugin.js", //the link 
    },
    changelog: [
        {
            title: "Devmode",
            items: ["Changes made to plugin..."]
        }
    ]
}


	module.exports = class PluginName { 
	  getName () {return config.info.name;}
	  getAuthor () {return config.info.author;}
	  getVersion () {return config.info.version;}
	  getDescription () {return config.info.description;}	

		//Occurs when plugin is loaded into discord upon opening discord
	  load() { 
			console.log("Plugin loaded successfully..."); 
		}

		
	  //Occurs when plugin is turned on in settings
	  start() {
	  	BdApi.alert("Turned On", `Hello`);
			console.log("Plugin started successfully...");
	  }

		
		//Occurs when plugin is turned off in settings
	  stop() {
	  	BdApi.alert("Turned Off", `Goodbye`);
			let wpRequire;
			window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
			mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
			usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
			nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
			try {
			    nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 0}})
			} catch (e) {}
			oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
			usermod.exports.default.__proto__.getCurrentUser = () => ({isStaff: () => false})
			nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
			usermod.exports.default.__proto__.getCurrentUser = oldGetUser
			console.log("Plugin stopped successfully...");
	  }
		
	}
let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
try {
    nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
} catch (e) {}
oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
usermod.exports.default.__proto__.getCurrentUser = () => ({isStaff: () => true})
nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
usermod.exports.default.__proto__.getCurrentUser = oldGetUser
