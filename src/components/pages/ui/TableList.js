import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

export default class TableList extends Component {

  render() {

    const { dataTable: { thead, tbody } } = this.props

    return (
      <TableContainer component={Paper}>
        <Table className='' aria-label="simple table">
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
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Create />}
                  >
                    Edit
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>

    )
  }
}
