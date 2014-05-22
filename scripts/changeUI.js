//Copyright (c) 2014 Shachar Avni. All rights reserved.

function changeToMouseOverImage(id, directories, extension)
{
	var directoriesString = getDirectoriesString(directories);
	mouseOverImage = directoriesString + "images/" + id + "_mouseover_image." + extension;

	document.getElementById(id).src = mouseOverImage;
}

function changeToDefaultImage(id, directories, extension)
{
	var directoriesString = getDirectoriesString(directories);
	defaultImage = directoriesString + "images/" + id + "_image." + extension;

	document.getElementById(id).src = defaultImage;
}

function getDirectoriesString(directories)
{
	var i = 0;
	var directoriesString = "";

	for(i = 0; i < directories; i++)
	{
		directoriesString = directoriesString + "../";
	}

	return directoriesString;
}