/**
* Employee.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		
  		name:{
  			type:"string",
  			required:true,
		    minLength: 2
  		},
  		empnum:{
  			type:"string",
  			required:true
  		},
  		email:{
  			type:"email",
  			required:"true",
  			unique: true
  		}
  		
  }
};

