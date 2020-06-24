import React from 'react'
import { Indicator } from '../indicator/indicator'

export function User_status(props) {
    if (props.status == "в поисках проекта") {
        return <Indicator color="green" />
    }
    if (props.status == "занят в проекте") {
        return <Indicator color="red" />
    }
    if (!props.status) {
        return <Indicator color="grey" />
    }
}