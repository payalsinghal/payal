var firstfunction=function()
{
	console.log("first")
}
var secondfunction=function()
{
    firstfunction();
	console.log("second");
}
secondfunction();