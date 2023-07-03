const os = require('os');





const TEMPLATES_FOLDER = "server/templates/"; // Have to do this because it expects the layout in the top level directory.
const LAYOUTS_FOLDER = "layouts/";
const PAGES_FOLDER = "pages/";
const THEMES_FOLDER = "themes/"
const DEFAULT_LAYOUT = LAYOUTS_FOLDER + "layout.ejs";

const DEFAULT_CONFIG = {
  "theme": "SystemLight",
  "processweather": "yes",
  "processnews": "yes",
  "processchanneloffline": "yes",
  "customaudio": "audio-fallback",
  "output": "/output",
  "city": "Austin",
  "state": "Texas",
  "generate_weatherv4": "no",
  "weathervideofadeoutduration": "5",
  "weathervideofadeinduration": "5",
  "weatheraudiofadeoutduration": "5",
  "weatheraudiofadeinduration": "5",
  "newsvideofadeoutduration": "5",
  "newsvideofadeinduration": "5",
  "newsaudiofadeoutduration": "5",
  "newsaudiofadeinduration": "5",
  "videolength": "30",
  "newsfeed": "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
  "newsfeed1": "",
  "newsfeed2": "",
  "xmltv": "http://127.0.0.1:8409/iptv/xmltv.xml",
  "videoresolution": "1280x720",
  "newsduration": "60",
  "log_location": "/tmp/ErsatzTV-Filler",
  "log_days": "7",
  "webport": "8408",
  "webtheme": "dark",
  "fontfile": "fonts/Verdana.tff",
  "newsarticles": "10",
  "processxmltvmerger": "no",
  "epgfiles": ""
}
const USER_CONFIG = "config.json"

const CHANGELOG = "Changelog.md"
const DOCUMENTATION = "Docs.md"
const README = "README.md"

const WORKDIR = "workdir"
const NEWSDIR = "workdir/News"
const WEATHERDIR = "workdir/Weather"
const CHANNEL_OFFLINEDIR = "workdir/Channel-offline"
const XMLTVMERGEDIR = "workdir/xmltvmerge"
/**
 * Returns the path constants for our ui templates
 * @returns {{TEMPLATES_FOLDER: string, DEFAULT_LAYOUT: string, LAYOUTS_FOLDER: string, PAGES_FOLDER: string}}
 * @constructor
 */
const TEMPLATE_CONSTANTS = () => {
    return {
        TEMPLATES_FOLDER, LAYOUTS_FOLDER, PAGES_FOLDER, DEFAULT_LAYOUT
    }
}

/**
 * Returns the path constants for our script config
 * @returns {{USER_CONFIG: string, DEFAULT_CONFIG: string}}
 * @constructor
 */
const CONFIG_CONSTANTS = () => {
    return {
        DEFAULT_CONFIG,
        USER_CONFIG
    }
}


let FFMPEGCOMMAND;
if (os.platform() === 'win32') {
  FFMPEGCOMMAND = 'ffmpeg.exe';
} else {
  FFMPEGCOMMAND = 'ffmpeg';
}


module.exports = {
    TEMPLATE_CONSTANTS,
    CONFIG_CONSTANTS,
    CHANGELOG,
    DOCUMENTATION,
    WORKDIR,
    WEATHERDIR,
    NEWSDIR,
    CHANNEL_OFFLINEDIR,
    FFMPEGCOMMAND,
    XMLTVMERGEDIR,
    README
};
