// @flow

import React from "react"
import { array, deepMix } from "@bosket/tools"

import { TreeView } from "../TreeView"
import type { TreeViewProps } from "../TreeView"

type FlatViewProps = {
    name: string,
    limit?: number
} & TreeViewProps

export class FlatView extends React.PureComponent<FlatViewProps> {

    conf : Object = {
        css: {
            TreeView: "FlatView"
        },
        strategies: {
            selection: ["multiple"],
            click: ["select"],
            fold: [(item: Object) => false]
        },
        disabled: (item: Object) =>
            !array(this.props.selection).contains(item) &&
            this.props.limit && this.props.selection.length >= this.props.limit ||
            item[this.props.category],
        display: (item: Object) => item[this.props.name],
        key: (item: Object) => item[this.props.name],
        openerOpts: { position: "none" }
    }

    render = () => <TreeView { ...deepMix(this.conf, this.props, true) }></TreeView>
}
