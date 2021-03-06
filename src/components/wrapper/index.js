import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import FlowChart from '../flowchart';
import Sidebar from '../sidebar';
import IconToolbar from '../icon-toolbar';
import FontLoadChecker from '../font-load-checker';
import './wrapper.css';

/**
 * Main app container. Handles showing/hiding the sidebar nav, and theme classes.
 */
export class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleNav: true
    };
  }

  toggleNav() {
    const visibleNav = !this.state.visibleNav;
    this.setState({ visibleNav });
  }

  render() {
    const { visibleNav } = this.state;
    const { theme } = this.props;

    return (
      <div
        className={classnames('kedro-pipeline', {
          'kui-theme--dark': theme === 'dark',
          'kui-theme--light': theme === 'light'
        })}>
        <Sidebar
          onToggle={this.toggleNav.bind(this)}
          theme={theme}
          visible={visibleNav}
        />
        <IconToolbar />
        <div className="pipeline-wrapper">
          <FontLoadChecker>
            <FlowChart visibleNav={visibleNav} />
          </FontLoadChecker>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Wrapper);
