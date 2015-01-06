var React = require('react');
// Section Component
var Section =  React.createClass({

  render: function () {
    //Element array
    var links = [];
    for (var i = 0; i<this.props.section.length; i++) {
      //Push doc link into links
      links.push(<div><Link to="api.section.document" params={{section: section, document: i}}>{i}</Link><br/></div>);
    }
    return (
      <div>
        //Section link
        <h3><Link to="api.section" params={{section: section}}>{section}</Link></h3><br/>
        //List of section docs links
        {links}
      </div>
    )
  }
});
//Export module
module.exports = Section;


