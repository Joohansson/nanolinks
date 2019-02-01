/** Find all links and make them searchable */
$(function () {
    function resetButton() {
        $('#go-btn').attr('href', '/'); //reset link button
        $('#go-btn').css("pointer-events", "none");
    };
    
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

            //Enable button
            if ($(this).val() != "") {
                $('#go-btn').css("pointer-events", "auto");
            }
        },
        groupBy: 'category',
        lookupFilter: function (suggestion, query, queryLowerCase) {
            return suggestion.value.toLowerCase().indexOf(queryLowerCase) === 0 || suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1 || suggestion.data.category.toLowerCase().indexOf(queryLowerCase) === 0 || suggestion.data.category.toLowerCase().indexOf(queryLowerCase) !== -1; //checking with both link label and category (both beginning and anywhere)
        }
    });
    
    $('#autocomplete-dynamic').on("change paste keyup input", function() {
        if ($(this).val() == "") {
            resetButton()
        }
    });
    
    //Disable link button after input is cleared
    $('#autocomplete-dynamic').closest('form').on('reset', function(event) {
        resetButton()
    });
    
    //Disable link button by default
    resetButton()
});
