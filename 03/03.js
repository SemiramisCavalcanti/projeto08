var app = angular.module('portifolioApp', []);

const viewProfile = 'View my profile on ';

app.controller('mainController', function ($scope){
  $scope.socialMedia = [
    {
      name: viewProfile + 'GitHub',
      url: 'https://github.com/felipecaputo',
      icon: 'fa-github-square'
    },
    {
      name: viewProfile + 'LinkedIn',
      url: 'https://linkedin.com/in/caputodev/en',
      icon: 'fa-linkedin-square'
    },
    {
      name: viewProfile + 'FreeCodeCamp',
      url: 'https://www.freecodecamp.com/felipecaputo',
      icon: 'fa-fire'
    },
    {
      name: viewProfile + 'Twitter',
      url: 'https://twitter.com/caputoDev',
      icon: 'fa-twitter'
    },
    {
      name: viewProfile + 'StackExchage',
      url: 'http://stackexchange.com/users/4041215/caputo',
      icon: 'fa-stack-overflow'
    },
    {
      name: viewProfile + 'codePen',
      url: 'https://codepen.io/felipecaputo/',
      icon: 'fa-codepen'
    },
    {
      name: 'Get in touch by e-mail',
      url: 'mailto://felipe.caputo@mgail.com',
      icon: 'fa-envelope-square'
    }
  ];
  
  $scope.languages = ['Delphi', 'JavaScript', 'Node.Js', 'HTML', 'CSS', 'C#', 'VB'];
  $scope.frameworksTools = ['AngularJs', 'KnockOutJs', 'SailsJs', 'Express', 'Bootstrap', 'DCOM', 'DataSnap'];
  $scope.skills = ['OOP', 'OOD', 'BugTracking', 'Data Modeling']
  $scope.portifolio = [
    {
      "name": "Random quote machine",
      "description": "A page that gets quotes from an API and show them randomly. Made for a bonfire at FreeCodeCamp",
      "img": "https://s3-us-west-2.amazonaws.com/i.cdpn.io/341157.epLZjz.small.bf64bf01-a2d3-40b9-8159-73d98cdd9994.png",
      "url": "https://codepen.io/felipecaputo/full/epLZjz"
    },
    {
      "name": "Simple calculator",
      "description": "A simple calculator made for FreeCodeCamp that can compute a stack respecting operators order",
      "img": "https://s3-us-west-2.amazonaws.com/i.cdpn.io/341157.PPaMOE.small.0fe5764d-8bf6-413f-91aa-c30673994afe.png",
      "url": "https://codepen.io/felipecaputo/full/PPaMOE/"
    },
    {
      "name": "",
      "description": "",
      "img": "",
      "url": ""
    }
  ];
})