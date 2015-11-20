Session.set('children1','');
Session.set('children2','');

Template.header.helpers({
	getParent: function(){
		return categories.find({"parent":"0"});
	},
	getChildren: function(parent){
		return categories.find({"parent":parent});
	}
});


Template.header.events({
	'mouseover #child1': function(e,tpl){
		tpl.$(".list").html('');
		tpl.$(".num2").html('');
		var catId=this._id;
		
		var list=categories.find({"parent":catId}).fetch();
		console.log('length1: '+list.length);
		for(var i=0;i<list.length;i++)
			tpl.$(".num2").append('<li><a href="/category/'+list[i]._id+'" id="child2" data-id="'+list[i]._id+'">'+list[i].title+'</a></li>');
		
		
	},
	'mouseover #child2': function(e,tpl){
		tpl.$(".list").html('');
		//tpl.$(".num2").html('');
		var catId=e.currentTarget.getAttribute('data-id');;
		var list=categories.find({"parent":catId}).fetch();
		console.log('length2: '+list.length);
		for(var i=0;i<list.length;i++)
			tpl.$(".list").append('<li><a href="/category/'+list[i]._id+'" id="child3" data-id="'+list[i]._id+'">'+list[i].title+'</a></li>');
		console.log("hover!!!!! "+this.title);
	},
	'mouseleave #staticmenu': function(e,tpl){
		console.log('resetting menu!');
		tpl.$(".list").html('');
		tpl.$(".num2").html('');
	},
	'mouseover .megamenu_drop1': function(e,tpl){
		console.log('resetting BIG menu!');
		tpl.$(".list").html('');
		tpl.$(".num2").html('');
	},
	'click #search': function(e,tpl){
		var search=tpl.$("#textToSearch").val();
		alert("search!"+search);
		var url="/search/"+search;
		Router.go(url);
		//var listProducts=products.find({"title":{"$regex": search}});
		
	}
});