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



Router.route('/managecategory',{
	name: 'managecategory'
});
Router.route('/addcategory',{
	name: 'addcategory'
	
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


//end kis