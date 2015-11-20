Session.set('compteur',0);
Template.reward.helpers({
	getCount: function(){
		var cc=Session.get('compteur');
		cc=Number(cc);
		cc=cc+1;
		Session.set('compteur',cc);
		return cc;
	},
	getpoint: function(){
		var me=Meteor.user();
		if(me==null)
			return;
		if(me.profile.shipcard!='undefined')
			return me.profile.shipcard.point;
		else
			return 0;
	},
	getproduct:function(){

		var point = Meteor.user().profile.shipcard.point;
		//console.log('MyResult:'+point);
		var p = Number(point);
		console.log('MyResult:'+p);
			var result = products.find({},{limit:10});//products.find({point:{$gte:0,$lte:p}});
			//console.log('MyProduct: '+result);
			console.log("NB result: "+result.fetch().length);
			return result;
		
	}
});

Template.reward.onRendered(function () {
  // Use the Packery jQuery plugin
  
  $('#ca-container').contentcarousel();
  $('#ca-container1').contentcarousel();
  
});

Template.rewardsilver.helpers({
	getpoint: function(){
		var id = Meteor.userId();
		return Meteor.users.find({_id:id});
	},
	getproduct:function(){
		var point = Meteor.user().profile.shipcard.point;
		//console.log('MyResult:'+point);
		var p = Number(point);
		console.log('MyResult:'+p);
		var silver = 200;
		var gold = 300;
		var result = products.find({point:{$gte:silver,$lte:p}});
		return result;
	},
	getImage: function(id){
			//var id = this.image;
			//alert('display'+id);
			//console.log('Display:' + id);
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	}
});
Template.rewardgold.helpers({
	getpoint: function(){
		var id = Meteor.userId();
		return Meteor.users.find({_id:id});
	},
	getproduct:function(){
		var point = Meteor.user().profile.shipcard.point;
		//console.log('MyResult:'+point);
		var p = Number(point);
		console.log('MyResult:'+p);
		var gold = 300;
		var result = products.find({point:{$gte:gold,$lte:p}});
		return result;
	},
	getImage: function(id){
			//var id = this.image;
			//alert('display'+id);
			//console.log('Display:' + id);
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	}
});