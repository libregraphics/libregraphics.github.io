function refreshFeatures() {

//  ------------------------------------------------ PPA Add scripts ------------------------------------------------///
var PPA = "";




PPA = PPA.substring(0, PPA.length - 1);

//  ------------------------------------------------ // Install scripts //------------------------------------------------///

var INSTALL = "";






// Show Install scripts
var packagelist = "";

packagelist +="################################################################################" + "\n" +"######** Use this Package List with Cleanstart shell Script to install **#######"+ "\n" + "################################################################################" + "\n" + PPA + "\n" + INSTALL;

$('#editor').html( packagelist );


};	

