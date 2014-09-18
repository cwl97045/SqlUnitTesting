SQL Unit Testing
=========
Version
------
0.0.0

Purpose
--------
* Wanted to build something cool that could assist me at my job, which often requires complex sql to following very specific rules.

Current Features
----------------
 * none
 

Developed + Tested Things
----------------
* Before Test Module - Encompasses Properties Parsing, Table Parsing and many more modules


Currently Developing
----------------------
* Test Module


Planning
--------
* Features that will actually make this thing work
* Fitnesse over the top implementation

Contributing
--------
If anyone would like to contribute let me know, I'm running CI with Codeship and like to have tests written for most things that get built. No real plans on making this any bigger than a little open source github project.


Development Installation
--------------

```sh
git clone [git-repo-url] SqlUnitTesting
cd SqlUnitTesting
npm install
Knock yourself out
```

Running it
----------
Currently depends on having a mySql connection set in the properties file. But once there is a working connection
```sh
  node TestEngine/engine.js 
```
 Planning on aliasing it later once things are more defined

[ ![Codeship Status for cwl97045/SqlUnitTesting](https://codeship.io/projects/f6e50f10-1e81-0132-f500-3e933e9d9e06/status)](https://codeship.io/projects/35544)
