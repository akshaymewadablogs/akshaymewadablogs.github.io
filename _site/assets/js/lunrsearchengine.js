
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 Full Stack Machine Learning Developer                              :                After Data Scientist a Full-stack machine learning developer is the most trending job. :                                                                                                                                                                       akshaymewada                                14 Oct 2020                                                                                                                      All Stories:                                                                                                     Two Sum / 2 Sum - Solution using Brute Force and Hash Table              :       Given an array of integers array, find two numbers such that they add up to a specific target number. 1 2 3 4 Input: [2, 7, 11, 15], target =. . . :                                                                               akshaymewada                01 Jan 2022                                                                                                                                     Full Stack Machine Learning Developer              :        After Data Scientist a Full-stack machine learning developer is the most trending job. :                                                                               akshaymewada                14 Oct 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/twosum/",
    "title": "Two Sum / 2 Sum - Solution using Brute Force and Hash Table",
    "body": "2022/01/01 - Given an array of integers array, find two numbers such that they add up to a specific target number. 1234Input: [2, 7, 11, 15], target = 9Output: 0, 1Input: [5, 4, 17, 3], target = 7Output: 1, 3First Solution / Brute Force:  The first option is just to try all the pairs in the array and see if any of them add up to the number target.  Since there are n2 possible pairs, this takes O(n2) time in the brute force.  The solution uses only O(1) space since no extra space is used or created.  This is not a “good” solution because better options exist, but it’s a correct solution. 123456def twoSum(array, target):   for i in range(len(array)):    for j in range(i+1,len(array)):      if array[i]+array[j]==target:        return [i,j]   return []Fast Solution / Optimized Solution:  Better than the above option is to create a dictionary (hash table) of all the elements in the array.  Now you can scan over the array and check, for each element num(array[i]), whether there’s another element remainder(array[j]) where remainder = target - num is present in the dictionary, then return pair which add up to the target.  This one runs in expected time O(n) because n insertions and n lookups in a dictionary take expected time O(n).  It uses space O(n). This is considered a “good” solution123456789def twoSum(array, target):  values = {}  for i, num in enumerate(array):    remainder = target - num     if remainder in values:       return [i, values[remainder]]     else:       values[num] = i   return []These solutions are very common, you can find more solutions like sort binary search, sliding windows, etc. Thank you. "
    }, {
    "id": 6,
    "url": "http://localhost:4000/fullstackmachinelearning/",
    "title": "Full Stack Machine Learning Developer",
    "body": "2020/10/14 -  After Data Scientist a Full-stack machine learning developer is the most trending job. : Why ML engineers should move to Full Stack?”: After all, the hard work of ML developers creates a model for a particular problem. During training, testing the model gives good accuracy and works well. When they integrate Model with APIs/Web services in the development and testing environment it works well. But, at the time of production, it fails to serve. The number of problems faced when moving ML service to Production, some of them are::       The architecture of Service:   Most of the ML solution fails in production because of bad architectures. The architecture is not matured to handle the customer environment.          Stacks Expertise:   The team with different stack expertise also can cause failure in ML service production. Like the team of Software Engineer, Frontend Engineer, Deployment Engineer, and DevOps Engineer. They fail to move ML service to production because of a lack of communication, knowledge towards technology, etc.          Hardware and Software:   The ML service requires good hardware and supportive software. The bad system configuration and choosing cheaper supportive software can cause bad ML service.     To solve the problem Machine Learning Developers must have an idea and hands-on every stack of Web technologies. So, that they can develop better architecture and scalable solutions for ML service. It is good direction towards productivity. Also vise-versa for all other developers.  Try to learn something about everything and everything about something.  Thomas Huxley What requires to become a full-stack machine learning developer? Full-stack Machine Learning Developers have knowledge and hands-on every stack of web technologies and Machine Learning.  Machine Learning (obviously this is core…) Backend (all ML developers must know this… To serve model…) Frontend (most ML developers hate this… it is optional…) Deployment (most ML developers fail here… they fail to scale…)Process To Become Full Stack ML Developer. Machine LearningTo become Full-Stack you must have expertise in most of the machine learning pipeline and algorithms. ML Pipeline you must know: Getting Data Preparing Data(Data Analysis and Preprocessing) Choosing Model Training, Testing, and Validation Prediction. Algorithms: Linear Regression, Logistic Regression, Dtree, Random Forest Bagging and Boosting K-Nearest Neighbour, Support Vector Machine Single Layer Perceptron, Multi-Layer Perceptron, Feed Forward CNN, RNN, LSTM, GRU, BERT Naive Bayes, Markov-Model, Graph Models, etc. Also, you must have knowledge of statics and probability, natural language processing, Image Processing, Data Analytics, etc. BackendTo serve a machine learning model for everyone, a web app/web API is required. Backend makes possible connecting your machine learning model to real-life and real-time data. you must know,  Database (SQL/NoSQL/Graph) Programming Language (Python/Java/Nodejs/etc) Web-Frameworks, API, and Microservices, etc. The architecture of the backend holds up everything. Like creating a pluggable, reusable, and with proper application design will make good machine learning application. For eg, you have created a machine learning model for sentiment analysis using any library (Scikit-Learn, Tensorflow, Caffe, Pytorch, etc ) to create the ML model. To analyze the given text create API for sentiment detection. API is created using any web framework (flask/Django/fast API). The customer interaction logs and other details are stored in the database for future work and plans using database management. Sentiment AnalysisThis sentiment analysis API extracts sentiment in a given string of text. Sentiment analysis, also called ‘opinion…deepai. org try senmtiment analysis FrontendThe front end of a website is the part that users interact with. Everything that you see when you’re navigating around the Internet, from fonts and colors to dropdown menus and sliders, is an HTML, CSS, and JavaScript being controlled by your computer’s browser. As a full-stack ML developer, it is an optional stack. But basic knowledge is a plus point. DeploymentDeployment is the process of making your application available for use on the internet.  After creating the backend code with ML-model. The code is tested locally. Testing gives a go-ahead signal for production. You must know for Deployment:  Hosting and OS For deployment, you need a hosting server provided by paid business companies like Amazon Web Services, Microsoft Azure, Google Cloud Platform. Selecting the best hardware, operating system, Software, Databases, option for services.  Web Server Dedicated running software which can satisfy client request on the world wide web. The web server responds to the HTTP request and serves the service. The famous web servers are NGINX, Apache Webserver, Microsoft IIS. This is important for ML-Developer here he can scale client requests for service. Docker Docker is an infrastructure management platform for running and deploying software. Docker can package up applications along with their necessary operating system dependencies for easier deployment across environments. In the long run, it has the potential to be the abstraction layer that easily manages containers running on top of any type of server, regardless of whether that server is on Amazon Web Services, Google Compute Engine, Linode, Rackspace, or elsewhere. Docker is the best option for ML developers to deploy the machine learning model. Also, there are some practices that can help in a deployment like CI/CD method, Configuration Management, etc. After reading this article I am sure you have an overview of Full-stack ML developer stack. Thank You !!! "
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