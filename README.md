# ErsatzTV-Filler
 Currently this script  generates weather forecast, news and channel currently offline filler for ErsatzTV or similar programs.

 Check back regularly for updates.

Discord chat: https://discord.gg/x4Nk4sfgSg

Donations are welcome: https://www.paypal.me/liam200333

## Themes
ErsatzTV-Filler uses theme files to adjust the look of the ouput video files.
These themes can be found at https://github.com/liam8888999/ErsatzTV-Filler-Themes


## Requirements
Linux operating system with nodejs, ffmpeg, xsltproc, jq, xmltv-utils and curl installed.

## Installation Instructions
#### Clone the latest version of the repo.
1. `git clone https://github.com/liam8888999/ErsatzTV-Filler.git`
#### Move into the required folder.
2. `cd ErsatzTV-Filler`
#### Allow the script to be executed
3. `chmod +x generator.sh`
#### Copy the configuration sample
4. `cp sample-config.conf config.conf`
#### Update the 'output', 'city', 'state' and other variables to your required locations, replace nano with your favorite text editor.
5. `nano config.conf`

## WEB Config Page Instructions (currently not compatible with docker)
### Current W.I.P, early days a lot may change...
#### Install nodejs
1. `sudo apt install nodejs`
#### Install npm
2. `sudo apt install npm`
#### Install dependencies
3. `npm ci`
#### Run the node dev server
4. `npm run dev`


## For Channel currently offline Filler

for this to work you need to run the script once
which will generate placeholder videos titled with the channel number
you will need to add each of these to its own collection and schedule that collection
during planned channel offline times.

## Update Instructions
Make sure your in the ErsatzTV-Filler directory and run the following command:
1. `git pull`

#### Automatic updates are now supported by default

It is recommended to copy the configuration sample again in order to ensure all new variables are included
#### Follow step 4 and 5 above

## Setting the script to run automatically
You may also want to add it as a cron job to run at your desired interval
#### Edit the crontab file - requires sudo password...
1. `sudo crontab -e`
#### Append the following line to the bottom of the file to make it run every hour.
##### Make sure to replace the path with your local one!
2. `0 * * * * /home/xxx/ErsatzTV-Filler/generator.sh`


## Docker

### Build

```shell
docker build -t liam8888999/ersatztv-filler .
```

### Run

```shell
docker run --rm -it -v $(pwd):/config -v /media/audio/whatever:/audio -v /media/whatever:/output -v /media/audio/whatever:/tmp/ErsatzTV-Filler liam8888999/ersatztv-filler /config/config.conf
```

For more information on how to use this with ErsatzTV please visit https://ersatztv.org/user-guide/filler/





 I am interested in making different kinds of filler so if you have any suggestions, bugs, improvements, etc. just open a issue and i will get back as soon as i can
