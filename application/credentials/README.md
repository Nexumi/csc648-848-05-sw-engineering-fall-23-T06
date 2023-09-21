### SSH
*Terminal*
1. Download [id_rsa](id_rsa)
2. Set `id_rsa` file permission
	- [Windows guide](#windows-key-permission)
	- [Linux/MacOS guide](#)
3. Open up a terminal
4. Run `ssh -i <Drag and Drop id_rsa here> ubuntu@orderowl.jpkit.us`
5. You are now connected to the server

*Termius*
6. Download [id_rsa](id_rsa)
7. Download [Termius](https://termius.com/download)
8. Add `NEW HOST`
9. Set Address to `orderowl.jpkit.us`
10. Set Username to `ubuntu`
11. Press `Set a Key`
12. Add a `NEW KEY`
13. Import `id_rsa`
14. Leave everything else blank
15. Save configuration
16. Double click newly added host to connect

### Windows Key Permission
1. Right click `id_rsa`
2. Click `Properties`
3. Go to `Security` tab
4. Click `Advance` button
5. Click `Disable inheritance` button
6. Choose the first option
7. Go through each user and delete them, EXCEPT for your account.
8. Press `OK` to save and you are ready to continue to SSH into the server

### Linux/MacOS Key Permission
1. Open up a terminal
2. Run `sudo chmod 600 <Drag and Drop id_rsa here>`
3. Enter your account password if prompted
4. You are ready to continue to SSH into the server

### MySQL
*Terminal*
1. SSH using the [guide](#ssh)
2. Run `mysql -u root -p`
3. Password is `myorderowl`
4. You are now connect to the database

*MySQL Workbench*
1. Download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
2. Add a new MySQL Connections
![MySQL credentials](tutorial/MySQL.png)<br />
SSH Password: `None`
SSH Key File: obtain from [SSH guide](#ssh)
Password: `myorderowl`
3. Press `OK` and enter the password
4. You can now connect to the database