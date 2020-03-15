let textContainer = document.querySelector(".text-wrapper");
let addBtn = document.querySelector(".switch-text");

let items = [
	'"Im Officially Running For President"',
	'"This is an island surrounded by water, big water, ocean water." (Puerto Rico)',
	'"If Ivanka werent my daughter, perhaps Id be dating her."',
	'"Its freezing and snowing in New York – we need global warming!"',
	'"We need a cheerleader, someone who can take the brand of the United States & make it great again."',
	'"Yeah, Obama had a dog. Youre right. Both parties should come together to finally create a safe and lawful system of immigration."',
	'"The USMCA, like the song YMCA, right?"'

];



addBtn.addEventListener('click', function() {

	let nextThing = items.shift();
	items.push(nextThing)
	// animate it away
	textContainer.style.opacity = 0
	textContainer.style.transition = " 1s ease-in"
	
	textContainer.innerHTML = nextThing;
	
	setTimeout(function() {
		// animate it back

		textContainer.style.opacity = 1
	}, 1000)
	addBtn.innerHTML = "next"
});




// user story

// user presses next
// old text changes to new text


// dev story

// find button
// click event happens to button
// find paragraph
// paragraph element text changes to a new string


// code

// query selector for button
// addEventListener
// query selector for paragraph
// pull next trump fuck up string from array
// inner html to change the string in the paragraph