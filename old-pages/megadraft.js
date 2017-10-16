import React from "react";
import ReactDOM from "react-dom";
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import Head from 'next/head'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null)};
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    const json = editorStateToJSON(editorState)
    console.log(json)
    this.setState({editorState});
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/megadraft.css"/>
        </Head>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}/>
      </div>
    )
  }
}
