import React, { Component } from "react";
import { RichTextEditor, Breadcrumb } from "egret";

class EditorForm extends Component {
  

  handleContentChange = contentHtml => {
    this.props.handleChangeContent(contentHtml);
  };

  render() {
    return (
      <div>
        <RichTextEditor
          content={this.props.content}
          handleContentChange={this.handleContentChange}
          placeholder="insert text here..."
        />
      </div>
    );
  }
}

export default EditorForm;
