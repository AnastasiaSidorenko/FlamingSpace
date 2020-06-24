import React from 'react'
import { Indicator } from '../indicator/indicator'

export function Project_status(props) {
    if (props.status == "набор") {
        return <Indicator color="green" />
    }
    if (props.status == "в разработке") {
        return <Indicator color="yellow" />
    }
    if (props.status == "завершен") {
        return <Indicator color="red" />
    }
}