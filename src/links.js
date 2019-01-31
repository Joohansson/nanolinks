/** Find all links and make them searchable */
$(function () {
	var links = [];
	$('.link-content > ul').find('a[href]').each(function(){
		//links.push({value: $(this).text(), data: {category: $(this).closest('.link-content').children('h2:first').text(), url: this.href}});
		links.push({value: $(this).text(), data: {category: $(this).closest('ul').prevAll('h3:first').text(), url: this.href}});
		//console.log($(this).text());
		//console.log(this.href);
	});

    // Initialize search autocomplete:
    $('#autocomplete-dynamic').autocomplete({
        lookup: links,
		onSelect: function (suggestion) {
			//window.location.href = suggestion.data.url; //Go to link when selecting the link
			$('#go-btn').attr('href', suggestion.data.url); //set link button
			$('#go-btn').removeClass('hidden'); //show button
		},
		groupBy: 'category'
    });
});