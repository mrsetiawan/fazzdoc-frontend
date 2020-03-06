import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import TableList from '../ui/TableList'
import Title from '../ui/Title'
import Grid from '@material-ui/core/Grid';
import ButtonAction from '../ui/ButtonAction'
import Add from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const data = [
  { id: 1, "nama_dokter": "Muhamad Rahmat Setiawan", tlp: "0812837123", spesialis: "Jantung", alamat: "Bandung" },
  { id:2, "nama_dokter": "Nurviza Indah", tlp: "0823746373", spesialis: "Kandungan", alamat: "Jakarta" },
]

export default class List extends Component {

  state = {
    dataTable: {
      thead: ["No", "Nama Dokter", "No Telepon","Spesialis", "Alamat"],
      tbody: []
    }
  }

  componentDidMount() {

    const tbody = data.map((item, idx) => ({
      "No": idx + 1,
      "Nama Dokter": item.nama_dokter,
      "No Telepon" : item.tlp,
      "Spesialis": item.spesialis,
      "Alamat": item.alamat
    }))

    this.setState({
      dataTable: { ...this.state.dataTable, tbody }
    })

  }

  render() {
    return (
      <Wrapper>
        <Grid item xs={11}>
          <Title variant='h3'>
            List Doctor
          </Title>
        </Grid>
        <Grid item xs={1}>
          <br/>
          <Link to='/entry/doctor'>
            <ButtonAction variant='contained' color='primary' startIcon={<Add />}>
              Add 
            </ButtonAction>
          </Link>
        </Grid>
        <TableList dataTable={this.state.dataTable} />
      </Wrapper>
    )
  }
}
