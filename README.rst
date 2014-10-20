ninja-daylight-x
================

This driver provides two devices:

* A counter until the next daylight state change
* A state indicating if it day or night. 

Installation
------------
* ssh into your block
* cd into your drivers directory

.. code:: bash

  cd /opt/ninja/drivers

* And clone the repository:

.. code:: bash

  git clone git://github.com/wichtounet/ninja-daylight-x.git

* Once the clone is over, cd into the driver directory and install it: 

.. code:: bash

  cd ninja-daylight-x
  sudo npm install

* Restart your block

.. code:: bash

  sudo service ninjablock restart

* Once your block has restarted, you should then see two new devices on your
  block. 
* You have to add states 'day' and 'night' to the "Daylight state" device.

Update
------

* ssh into your block
* cd into the driver directory

.. code:: bash

  cd /opt/ninja/drivers/ninja-daylight-x/

* And update the repository:

.. code:: bash

  git pull origin master

* Restart your block

.. code:: bash

  sudo service ninjablock restart
  
And that's it ;)

License
-------

This project is distributed under the terms of the MIT license, see `LICENSE`
for details. 

This project has been forked from https://github.com/pablorodiz/ninja-daylight
