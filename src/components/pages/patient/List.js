import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import TableList from '../ui/TableList'
import Title from '../ui/Title'
import Grid from '@material-ui/core/Grid'
import ButtonAction from '../ui/ButtonAction'
import Add from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

const data = [
  { id: 1, "pasien": "John Doe" , tlp: "082388723" ,alamat: "Jakarta" },
  { id:2, "pasien": "Umar Zaino", tlp: "082732874", alamat: "Jakarta" },
  { id:3 ,"pasien": "Katty Perry", tlp: "08273234",  alamat: "Kediri" },
]

export default class List extends Component {

  state = {
    dataTable: {
      thead: ["No", "Nama Pasien", "No Telepon", "Alamat"],
      tbody:[],
      route: '/patient'
    }
  }


  componentDidMount(){
    const tbody = data.map((body,idx) => ({
      "id" : body.id,
      "No" : idx+1,
      "Nama Pasien" : body.pasien,
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
            List Patient
          </Title>
        </Grid>
        <Grid item xs={1}>
          <br/>
          <Link to='/entry/patient'>
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
