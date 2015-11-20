Router.configure({
    layoutTemplate: 'mainLayout'
});



Router.route('/',{
    //layoutTemplate: 'homeLayout',
    name:'home'
});
Router.route('/login', {
    name: 'login'
});
//admin
Router.route('/addproduct',{
	name:'addproduct'
});
Router.route('/updateproduct/:_id',{
	name: 'updateproduct',
	data: function(){
        var id = this.params._id;
        var da = products.findOne({_id: id });
		return da;
    }
});




Router.route('/category/:id',{
        name:'listing',
        data: function() {
        return categories.findOne({_id: this.params.id});
    }
});

Router.route('/details/:id', {
    name: 'details',
    data: function() {
        return products.findOne({_id: this.params.id});
    },
    waitOn : function () {
            return Meteor.subscribe("products",-1);
        },
    
});



Router.route('/profile', {
    name: 'profile' 
});
Router.route('/editprofile', {
    name: 'editprofile'  
});

Router.route('/reward', {
    name: 'reward'
});

// admin categories
Router.route('/managecategory',{
	name: 'managecategory'
});
Router.route('/addcategory',{
	name: 'addcategory'
	
});

Router.route('/updatecategory/:_id',{
	name: 'updatecategory',
	data: function(){
        var id = this.params._id;
        var da = categories.findOne({_id: id });
		return da;
    }
});


// shop
Router.route('/manageshop',{
	name:'manageshop'
});

Router.route('/shopdetail/:id',{
	name:'shopdetail',
	data: function(){
        var id = this.params.id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

Router.route('/updateshop/:_id',{
	name: 'updateshop',
	data: function(){
        var id = this.params._id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

// parent tags
Router.route('/manageparenttag',{
		name:'manageparenttag'
});
Router.route('/updateparenttag/:_id',{
		name:'updateparenttag',
		data: function(){
			var id = this.params._id;
			var result = parent_tags.findOne({_id: id});
			return result;
		}
});
// tags
Router.route('/managetag',{
		name:'managetag'
});


//end kis