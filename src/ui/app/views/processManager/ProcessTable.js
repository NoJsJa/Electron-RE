import React from 'react';
import PropTypes from 'prop-types';

import ProcessRow from './ProcessRow';
import ProcessTableHeader from './ProcessTableHeader';

export default class ProcessTable extends React.Component {
  static propTypes = {
    processData: PropTypes.arrayOf(PropTypes.object),
    selectedPid: PropTypes.number,
    sorting: PropTypes.PropTypes.shape({
      path: PropTypes.string,
      how: PropTypes.string
    }),
    onSortingChange: PropTypes.func,
    onSelectedPidChange: PropTypes.func
  }

  render() {
    return (
      <table className="process-table table-striped">
        <thead>
          <tr>
            <ProcessTableHeader
              path='pid'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >Pid</ProcessTableHeader>

            <ProcessTableHeader
              path='mark'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >Mark</ProcessTableHeader>

            <ProcessTableHeader
              path='ppid'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >Parent</ProcessTableHeader>

            <ProcessTableHeader
              path='memory'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >Memory</ProcessTableHeader>

            <ProcessTableHeader
              path='cpu'
              sorting={this.props.sorting}
              onSortingChange={this.props.onSortingChange}
            >CPU(%)</ProcessTableHeader>

          </tr>
        </thead>
        <tbody>
        {
          this.props.data.map(p =>
            <ProcessRow
              key={p.pid}
              {...p}
              onSelect={() => this.props.onSelectedPidChange(p.pid)}
              selected={this.props.selectedPid === p.pid}
            />
          )
        }
        </tbody>
      </table>
    )
  }
}
