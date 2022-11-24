
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blogs/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blogs/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/blogs/aboutme/",
    "title": "About me",
    "body": "My name is Inigo Montoya. I have the following qualities:  I rock a great mustache I’m extremely loyal to my familyWhat else do you need? My story: To be honest, I’m having some trouble remembering right now, so why don’t you just watch my movie and it will answer all your questions. "
    }, {
    "id": 3,
    "url": "http://localhost:4000/blogs/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/blogs/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Two Sum / 2 Sum - Solution using Brute Force and Hash Table                              :               Given an array of integers array, find two numbers such that they add up to a specific target number. 1 2 3 4 Input: [2,. . . :                                                                                                                                                                       akshaymewada                                01 Jan 2020                                                                                                                      All Stories:                                                             Two Sum / 2 Sum - Solution using Brute Force and Hash Table              :       Given an array of integers array, find two numbers such that they add up to a specific target number. 1 2 3 4 Input: [2, 7, 11, 15], target =. . . :                                                                               akshaymewada                01 Jan 2020                                            "
    }, {
    "id": 5,
    "url": "http://localhost:4000/blogs/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/blogs/twosum/",
    "title": "Two Sum / 2 Sum - Solution using Brute Force and Hash Table",
    "body": "2020/01/01 - Given an array of integers array, find two numbers such that they add up to a specific target number. 1234Input: [2, 7, 11, 15], target = 9Output: 0, 1Input: [5, 4, 17, 3], target = 7Output: 1, 3First Solution / Brute Force:  The first option is just to try all the pairs in the array and see if any of them add up to the number target.  Since there are n2 possible pairs, this takes O(n2) time in the brute force.  The solution uses only O(1) space since no extra space is used or created.  This is not a “good” solution because better options exist, but it’s a correct solution. 123456def twoSum(array, target):   for i in range(len(array)):    for j in range(i+1,len(array)):      if array[i]+array[j]==target:        return [i,j]   return []Fast Solution / Optimized Solution:  Better than the above option is to create a dictionary (hash table) of all the elements in the array.  Now you can scan over the array and check, for each element num(array[i]), whether there’s another element remainder(array[j]) where remainder = target - num is present in the dictionary, then return pair which add up to the target.  This one runs in expected time O(n) because n insertions and n lookups in a dictionary take expected time O(n).  It uses space O(n). This is considered a “good” solution123456789def twoSum(array, target):  values = {}  for i, num in enumerate(array):    remainder = target - num     if remainder in values:       return [i, values[remainder]]     else:       values[num] = i   return []These solutions are very common, you can find more solutions like sort binary search, sliding windows, etc. Thank you. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});