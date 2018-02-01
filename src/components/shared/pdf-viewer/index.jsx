import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import throttle from 'lodash.throttle';


export default class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      pages: [],
    };
  }
  componentDidMount() {
    this.setDivSize();
    window.addEventListener('resize', throttle(this.setDivSize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.setDivSize, 500));
  }

  onDocumentLoaded = ({ numPages }) => {
    console.log(numPages);
    this.setState({ pages: Array.from(new Array(numPages), (val, index) => index + 1) });
  }

  setDivSize = () => {
    console.log(window.innerWidth);
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <Document file={this.props.file} onLoadSuccess={this.onDocumentLoaded}>
        { this.state.pages.map(pageNumber => (
          <Page key={pageNumber} pageNumber={pageNumber} width={this.state.width} />
      ))}
      </Document>
    );
  }
}
