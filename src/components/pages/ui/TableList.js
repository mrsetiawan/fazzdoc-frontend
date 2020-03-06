import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ButtonAction from '../ui/ButtonAction'
import DeleteIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

export default class TableList extends Component {

  render() {

    const { dataTable: { thead, tbody } } = this.props

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {thead.map((item, idx) => <TableCell key={idx}>{item}</TableCell>)}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tbody.map((body, idx) => (
              <TableRow key={idx}>
                {thead.map((head, index) => {
                  return (
                    <TableCell key={index}>{body[head]}</TableCell>
                  )
                })}
                <TableCell>
                  <ButtonAction variant='contained' color='primary' startIcon={<Create />}>
                    Edit
                  </ButtonAction>
                  &nbsp;&nbsp;
                  <ButtonAction variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                    Delete
                  </ButtonAction>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>

    )
  }
}
