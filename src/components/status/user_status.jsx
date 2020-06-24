import React from 'react'
import { Indicator } from '../indicator/indicator'

export function User_status(props) {
    if (props.status == "в поиске проекта") {
        return <Indicator color="green" />
    }
    if (props.status == "занят в проекте") {
        return <Indicator color="red" />
    }
    else {
        return <Indicator color="grey" />
    }
}