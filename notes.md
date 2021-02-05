if a filewatchers error is encouterd, so you have to alter the system file watchers
to raise the max number of files that can be tracked

do the follwoing steps..( on linux )

1. open the following file at the following path with vim or nano
    
    ``/etc/sysctl.conf``

2. append this line at the end of the previous file
    
    ``fs.inotify.max_user_watches=524288``

3. commit these changes to the file

    ``sudo sysctl -p``
