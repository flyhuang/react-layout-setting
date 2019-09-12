import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash.range'
import './index.css';

export default class ReactLayoutSetting extends Component {

    static propTypes() {
        return {
            row: PropTypes.number,
            col: PropTypes.number,
            tableRow: PropTypes.number,
            tableCol: PropTypes.number,
            callback: PropTypes.func
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            row: (props.row || props.row === 0) ? props.row : 0,
            col: (props.col || props.row === 0) ? props.col : 0,
            tableRow: (props.tableRow || props.tableRow === 0) ? props.tableRow : 4,
            tableCol: (props.tableCol || props.tableCol === 0) ? props.tableCol : 4,
        };
    }

    render() {
        const { row, col, tableRow, tableCol } = this.state;
        const { callback } = this.props

        return (
            <table className="g-rgl-layout">{
                range(tableRow).map((_row) => {
                    return (
                        <tr> {
                            range(tableCol).map((_col) => {
                                return (
                                    <td className={(_row + 1 <= row && _col + 1 <= col) ? 'g-rgl-grid g-rgl-grid-active' : 'g-rgl-grid'}
                                        onMouseEnter={() => {
                                            this.setState({
                                                row: _row + 1,
                                                col: _col + 1
                                            })
                                        }}
                                        onClick={() => {
                                            callback && callback(_row + 1, _col + 1)
                                        }}
                                    />
                                )
                            })
                        }
                        </tr>)
                })
            }
            </table>
        )
    }
}
