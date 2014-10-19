ninja-daylight-x
================

This driver provides two devices:

* A counter until the next daylight state change
* A state indicating if it day or night. 

Installation
------------
* ssh into your block
* cd into your drivers directory

```bash
cd /opt/ninja/drivers
```

* And clone the repository:

```bash
git clone git://github.com/wichtounet/ninja-daylight-x.git
```

* Once the clone is over, cd into the driver directory and install it: 

```bash
cd ninja-daylight-x
sudo npm install
```

* Restart your block

```bash
sudo service ninjablock restart
```

* Once your block has restarted, you should then see two new devices on your
  block. 
* You have to add states 'day' and 'night' to the "Daylight state" device.

License
-------

This project is distributed under the terms of the MIT license, see `LICENSE`
for details. 
