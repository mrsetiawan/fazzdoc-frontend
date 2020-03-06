import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import TableList from '../ui/TableList'
import Title from '../ui/Title'
import Grid from '@material-ui/core/Grid';
import ButtonAction from '../ui/ButtonAction'
import Add from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const data = [
  { id: 1, "nama_rumah_sakit": "RS Cipto Mangun Kusumo" , tlp: "021293898" ,alamat: "Jakarta" },
  { id:2, "nama_rumah_sakit": "Rs Bhayangkara", tlp: "02129398389", alamat: "Jakarta" },
  { id:3 ,"nama_rumah_sakit": "Rs Premier Bintaro", tlp: "02199990988",  alamat: "Tangerang Selatan" },
]

export default class List extends Component {

  state = {
    dataTable: {
      thead: ["No", "Nama Rumah Sakit" ,"No Telepon", "Alamat"],
      tbody: []
    }
  }

  componentDidMount(){
    const tbody = data.map((body,idx) => ({
      "No" : idx+1,
      "Nama Rumah Sakit" : body.nama_rumah_sakit,
      "No Telepon": body.tlp,
      "Alamat" : body.alamat
    }))

    this.setState({
      dataTable: {...this.state.dataTable, tbody}
    })
  }

  render() {
    return (
      <Wrapper>
        <Grid item xs={11}>
          <Title variant='h3'>
            List Hospitals
          </Title>
        </Grid>
        <Grid item xs={1}>
          <br/>
          <Link to='/entry/rs'>
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
