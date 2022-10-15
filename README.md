# ErsatzTV-Filler
 Currently this script only generates weather forecast filler for ErsatzTV or similar programs.

 Check back regularly for updates.

Discord chat: https://discord.gg/x4Nk4sfgSg

## Requirements
Linux operating system with ffmpeg and curl installed. 

## Installation Instructions
#### Clone the latest version of the repo.
1. `git clone https://github.com/liam8888999/ErsatzTV-Filler.git`
#### Allow the script to be executed
2. `chmod +X generator.sh`
#### Copy the configuration sample
3. `cp sample-config.conf config.conf`
#### Update the 'output', 'city', 'state' variables to your required locations, replace nano with your favorite text editor.
4. `nano config.conf`

## Update Instructions
Make sure your in the ErsatzTV-Filler directory and run the following command:
1. `git pull`

## Setting the script to run automatically
You may also want to add it as a cron job to run at your desired interval
#### Edit the crontab file - requires sudo password...
1. `sudo crontab -e`
#### Append the following line to the bottom of the file to make it run every hour.
##### Make sure to replace the path with your local one!
2. `0 * * * * /home/xxx/ErsatzTV-Filler/generator.sh`

For more information on how to use this with ErsatzTV please visit https://ersatztv.org/user-guide/filler/





 I am interested in making different kinds of filler so if you have any suggestions, bugs, improvements, etc. just open a issue and i will get back as soon as i can
