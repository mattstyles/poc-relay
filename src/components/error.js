
import React, { Component } from 'react'
import { Card, Text, Box } from '@raid/kit'

export class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false,
      errorInfo: ''
    }
  }

  componentDidCatch (error, errorInfo) {
    console.error('Caught you:', error)
    this.setState({
      hasError: true,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.hasError) {
      return (
        <Box my={4}>
          <Card sx={{ borderColor: 'critical.700', background: 'critical.400' }}>
            <Text color='critical.700'>
              {JSON.stringify(this.state.errorInfo, null, '')}
            </Text>
          </Card>
        </Box>
      )
    }

    return this.props.children
  }
}
