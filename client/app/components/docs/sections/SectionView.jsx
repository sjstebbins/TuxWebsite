var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Markdown = require('react-remarkable');
var DocumentStore = require('../../../stores/DocumentStore');
var DocumentActions = require('../../../actions/DocumentActions')

var SectionView = React.createClass({
  mixins: [Router.State],
  getInitialState: function () {
    return {
      section: DocumentStore.getSingleDoc(this.getParams().section)
    };
  },
  listenerCallback: function () {
    this.setState({
      section: DocumentStore.getSingleDoc(this.getParams().section)
    });
  },
  componentDidMount: function () {
    var currentParams = this.getParams();
    this.__currentSection = currentParams.section;
    DocumentStore.addChangeListener(this.listenerCallback);
    DocumentActions.getDoc(currentParams);
  },
  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this.listenerCallback);
  },
  componentWillReceiveProps: function () {
    var currentParams = this.getParams();
    if (this.__currentSection !== currentParams.section) {
      DocumentActions.getDoc(currentParams);
      this.__currentSection = currentParams.section;
    }
  },
  render: function () {
    return (
      <div>
        <Markdown options={{html: true}}>
          {this.state.section}
        </Markdown>
      </div>
    )
  }
})

module.exports = SectionView;

