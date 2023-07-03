import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFiles, fetchFileDataByName, clearFiles } from '../actions/fileActions';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const FileList = () => {
  const files = useSelector((state) => state.files);
  const dataNotFound = useSelector((state) => state.dataNotFound);
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    dispatch(fetchFiles());

    return () => {
      dispatch(clearFiles());
    };
  }, [dispatch]);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleFetchFileData = () => {
    dispatch(fetchFileDataByName(fileName));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFetchFileData();
    }
  };

  return (
    <div>
      <h1>
        <Badge bg="primary">File List from echo server</Badge>
      </h1>
      <Form>
        <div className="row">
          <h6>Write file name</h6>
          <div className="col-md-9">
            <Form.Group controlId="formFileName">
              <Form.Control type="text"value={fileName} onChange={handleFileNameChange} onKeyDown={handleKeyDown} />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Button variant="warning" onClick={handleFetchFileData} className="w-100">
              Get File Data
            </Button>
          </div>
        </div>
      </Form>

      {dataNotFound && (
        <Alert variant="danger">
          No data found for the specified file.
        </Alert>
      )}

      <Table striped bordered hover variant="dark" className="mt-4">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
  {files && Array.isArray(files) && files.map((file) =>
    file.lines && Array.isArray(file.lines) && file.lines.map((line, index) => (
      <tr key={file.file + index}>
        {index === 0 && (
          <td rowSpan={file.lines.length}>
            <Badge variant="primary">{file.file}</Badge>
          </td>
        )}
        <td>
          <Badge bg="secondary">{line.text}</Badge>
        </td>
        <td>
          <Badge bg="success">{line.number}</Badge>
        </td>
        <td>
          <Badge bg="dark">{line.hex}</Badge>
        </td>
      </tr>
    ))
  )}
</tbody>
      </Table>
    </div>
  );
};

export default FileList;
