$(document).ready(function()
{
// var
	let tabsItem = $('.tabs-item');
// vend
	// click 'ti'
	tabsItem.on('click', function(event)
	{
		// default == cancel
		event.preventDefault();
		// activeContent == element id
		let activeContent = $(this).attr('href');
		// make off
		$('.visible').toggleClass('visible');
		// find activeContent => make visible
		$(activeContent).toggleClass('visible');
		// orange == active
		$('.tabs-item-active').toggleClass('tabs-item-active');
		$(this).toggleClass('tabs-item-active');
	})
});