if (Meteor.isClient) {
  Template.hello.helpers({
    persons: function() {
      return [
        { name: 'josh' },
        { name: 'peter' }
      ];
    }
  });

  Template.personsList.helpers({
    toUpper: function(str) {
      //You can pass name as a parameter or access it directly via this:
      //console.log(this.name);
      if (str) {
        str = str.toUpperCase();
      }
      return str;
    }
  });

  Template.personsList.events({
    'click .person-name': function(evt, tpl) {
      console.log('evt.target.innerHTML:', evt.target.innerHTML);
      console.log('tpl.data:', tpl.data);
      console.log('this.name:', this.name);
      alert('You clicked on ' + this.name + '. See developer console for more info');
    }
  });

}
