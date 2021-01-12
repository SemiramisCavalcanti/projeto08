<!DOCTYPE HTML>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
        
        <link rel="stylesheet" href="03.css"/>


    </head>
    <body ng-app="portifolioApp" ng-controller="mainController as main">
        <div class="nav-container">
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Felipe Caputo</a>
                </div>
                <div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portifolio">Portifolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="home" class="container-fluid main-bg">
            <div class="center-highlight">
                <h1>Felipe Caputo's Personal Profile</h1>
                <h3>My personal profile info</h3>      
                <div class="social-container">
                    <span class="social-contact-info" ng-repeat="social in socialMedia">
                        <a href="{{social.url}}" target="_blank">
                            <div class="social-circle" title="{{social.name}}">
                                <i class="fa {{social.icon}} fa-fw"></i>
                            </div>
                        </a>            
                    </span>
                </div>
            </div>
        </div>
        <section id="about" class="main-bg about-bg">
            <div class="profile vert-center">
                <div class="pull-left profile-left">
                    <img src="https://c2.staticflickr.com/6/5791/22955875511_7cb650b84e_q.jpg" class="profile-img grow">
                    <h3>Felipe Caputo</h3>
                </div>
                <div class="pull-right profile-right">
                    <h2> Who am I? </h2>
                    <p>Describe.me</p>
                    <h2>Languages</h2>
                    <ul>
                        <li ng-repeat="lang in languages">{{lang}}</li>
                    </ul>
                </div>
                <div style="display: block; clear: both;"></div>
            </div>
        </section>
        <section id="portifolio" class="main-bg portifolio-bg">
            <h1>Portifolio</h1>
            <div class="container"
                 <div class="row">
                    <div class="col-md-5 col-xs-12 project-container" ng-repeat="project in portifolio">
                        <h3>{{project.name}}</h3>
                        <p>{{project.description}}</p>
                        <a href="{{project.url}}" target="_blank">
                            <img src="{{project.img}}">
                        </a>
                        <div>
                        </div>
                    </div>
            </div>
        </section>
                    <script src="01.js"></script>       
    </body>
</html>