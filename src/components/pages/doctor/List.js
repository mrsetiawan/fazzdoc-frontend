import React, { Component } from 'react'
import Wrapper from '../ui/Wrapper'
import TableList from '../ui/TableList'


const data = [
  { "nama_dokter": "Muhamad Rahmat Setiawan", spesialis: "Jantung", alamat: "Bandung" },
  { "nama_dokter": "Muhamad Rahmat Setiawan", spesialis: "Jantung", alamat: "Bandung" },
  { "nama_dokter": "Muhamad Rahmat Setiawan", spesialis: "Jantung", alamat: "Bandung" },
]


export default class List extends Component {

  state = {
    dataTable: {
      thead: ["No", "Nama Dokter", "Spesialis", "Alamat"],
      tbody: []
    }
  }

  componentDidMount() {

    const tbody = data.map((item, idx) => ({
      "No": idx + 1,
      "Nama Dokter": item.nama_dokter,
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
        doctor
        <TableList dataTable={this.state.dataTable} />
      </Wrapper>
    )
  }
}
