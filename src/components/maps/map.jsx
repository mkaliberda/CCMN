import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button, Radio, Input, AutoComplete
} from 'antd'
import { getAllMaps, getAllClients } from '../../reducers/cisco'

const Search = Input.Search
class FloorMap extends Component {
  static propTypes = {
    getAllMaps: PropTypes.func.isRequired,
    floorMaps: PropTypes.array.isRequired,
    activeClients: PropTypes.array.isRequired,
    getAllClients: PropTypes.func.isRequired,
  }

  state = {
    currentFloor: 1
  }

  componentDidMount() {
    if (!this.props.floorMaps) this.props.getAllMaps()
    if (!this.props.activeClients) this.props.getAllClients()
  }

  handleFloorChange = e => {
    this.setState({
      currentFloor: e.target.value
    })
  }

  render() {
    const { currentFloor } = this.state
    // const { macAddresses } = this.props
    return (
      <div>
        <Radio.Group style={{ display: 'flex', flexDirection: 'row' }} value={currentFloor} onChange={this.handleFloorChange}>
          <Radio.Button value={1}>Floor 1</Radio.Button>
          <Radio.Button value={2}>Floor 2</Radio.Button>
          <Radio.Button value={0}>Floor 3</Radio.Button>
        </Radio.Group>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AutoComplete
            // dataSource={macAddresses}
            style={{ width: 200 }}
            onSelect={this.hangleMacSelect}
            onSearch={this.handleSearch}
            placeholder="Enter mac address"
          />
          <Search
            placeholder="Enter x-login"
            // onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img style={{ height: 600 }} src={(this.props.floorMaps || {})[currentFloor] ? this.props.floorMaps[currentFloor].src : null} />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  floorMaps: state.cisco.floorImages,
  activeClients: state.cisco.activeClients,
})

const mapDispatchToProps = dispatch => ({
  getAllMaps: () => dispatch(getAllMaps()),
  getAllClients: () => dispatch(getAllClients())
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorMap)
