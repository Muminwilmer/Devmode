 /**
 * @name Devmode
 * @author Muminwilmer
 * @version 1
 * @source https://github.com/Muminwilmer/Devmode.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Muminwilmer/Devmode/main/Devmode.plugin.js
 */

/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you've mistakenly tried to run me directly. \\n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/

var DevMode = (() => {

'use strict';

const BaseColor = "#f0c";
var Utils = {
    Log: (message) => { console.log(`%c[DevMode] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Warn: (message) => { console.warn(`%c[DevMode] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
    Error: (message) => { console.error(`%c[DevMode] %c${message}`, `color:${BaseColor};font-weight:bold`, "") }
};

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


return function() { return {
    getName: () => "DiscordFreeEmojis",
    getShortName: () => "FreeEmojis",
    getDescription: () => "Link emojis if you don't have nitro! Type them out or use the emoji picker! [64px]",
    getVersion: () => "1.6",
    getAuthor: () => "An0",

    start: Start,
    stop: Stop
}};

})();

module.exports = Devmode;

/*@end @*/
