const { readFile, stat, copyFile, writeFile } = require('fs').promises; //Loads the asynchronous version of fs
const { CONFIG_CONSTANTS } = require("../constants/path.constants")

/**
 * Returns the contents of a file from the local system. Requires a relative path passing through!
 * @param path
 * @returns {Promise<Buffer>}
 */
const loadFileContentsIntoMemory = async (path) => {
    const data = await readFile(path, "binary");
    return Buffer.from(data);
}
/**
 * Returns true/false on existence of file
 * @param path
 * @returns {Promise<*>}
 */

const doesFileExist = async (path) => {
    let result;
    try{
        result = await stat(path);// !! is a truthy check, so it checks if the value is not null, undefined, nan or -1
    }catch (e) {
        result = false;
    }
    return result;
}

/**
 * Copy sample-config.conf if config.conf does not exist
 * @returns {Promise<void>}
 */
const createNewUserConfigFromDefault = async () => {
  await copyFile(CONFIG_CONSTANTS().DEFAULT_CONFIG, CONFIG_CONSTANTS().USER_CONFIG);
  console.log('A new user config file was generated from the default file');
}

/**
 * Overwrite the contents of an existing file... currently easiest way I know of updating the local file with changes.
 * @param path
 * @param fileContents
 * @returns {Promise<void>}
 */
const overWriteFileContents = async (path, fileContents) => {
    try{
        await writeFile(path, fileContents);
    }catch(e){
        console.error(e)
    }

}

module.exports = {
    doesFileExist,
    loadFileContentsIntoMemory,
    createNewUserConfigFromDefault,
    overWriteFileContents
}
