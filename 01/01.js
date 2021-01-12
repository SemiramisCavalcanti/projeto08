function _(id){return (document.getElementById(id))}
var GBD=new GenbetaDevAPP()

function GenbetaDevAPP(){
	this.big=function(element){
		_("GBD-APP").className=''
		_("GBD-APP-BIG").setAttribute('big','true')
		var GBD_APP_TOP = document.body.getElementsByClassName('GBD-APP-TOP')
		if(GBD_APP_TOP.length > 0) GBD_APP_TOP[0].className = 'cont'
		element.className += ' GBD-APP-TOP'
	}
}