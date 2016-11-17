var endpointURL = 'https://www.googleapis.com/youtube/v3/search';

function getDataAPI(searchInput, callback) {
    var query = {
        part: 'snippet',
        key: 'AIzaSyByrnnm-Zj12peIUjS19fvcJliD5_posBI',
        q: searchInput,
        maxResults: 16
    }
    $.getJSON(endpointURL, query, callback);
}

function displaySearchData(data) {
    var results = '';
    
    console.log(data);
    
    data.items.forEach(function(item, index) {
        console.log(item, index);
        
        var mediumThumbnail = item.snippet.thumbnails.medium.url;
        var videoID = item.id.videoId;
        
        results += '<a href="https://www.youtube.com/watch?v=' + videoID +
            '" target="_blank">' + '<img src="'+mediumThumbnail+'"></a>';
    });
    
    $('.js-search-results').empty();
    $('.js-search-results').html(results);
}


$(function() {
    $('.js-search-form').submit(function(event) {
        event.preventDefault();
        // text is for puting stuff on a page
        getDataAPI($('.js-query').val(), displaySearchData);
    })
});