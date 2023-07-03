import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import FileList from '../FileList';
import { fetchFiles, fetchFileDataByName, clearFiles } from '../../actions/fileActions';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../../actions/fileActions', () => ({
  fetchFiles: jest.fn(),
  fetchFileDataByName: jest.fn(),
  clearFiles: jest.fn(),
}));

describe('FileList', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchFiles.mockClear();
    fetchFileDataByName.mockClear();
    clearFiles.mockClear();
  });

  test('renders FileList component', () => {
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce(false);
    useDispatch.mockReturnValue(jest.fn());

    render(<FileList />);

    expect(screen.getByText('File List from echo server')).toBeInTheDocument();
    expect(screen.getByText('Get File Data')).toBeInTheDocument();
  });

  test('fetches files on component mount', () => {
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce(false);
    useDispatch.mockReturnValue(jest.fn());

    render(<FileList />);

    expect(fetchFiles).toHaveBeenCalledTimes(1);
  });

  test('dispatches fetchFileDataByName when button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce(false);
  
    render(<FileList />);
  
    const fileNameInput = screen.getByRole('textbox');
    const fetchButton = screen.getByText('Get File Data');
  
    fireEvent.change(fileNameInput, { target: { value: 'test2.csv' } });
    fireEvent.click(fetchButton);
  
    expect(fetchFileDataByName).toHaveBeenCalledWith('test2.csv');
  });
  
  test('dispatches fetchFileDataByName when Enter key is pressed', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce(false);
  
    render(<FileList />);
  
    const fileNameInput = screen.getByRole('textbox');
  
    fireEvent.change(fileNameInput, { target: { value: 'test2.csv' } });
    fireEvent.keyDown(fileNameInput, { key: 'Enter' });
  
    expect(fetchFileDataByName).toHaveBeenCalledWith('test2.csv');
  });

  test('displays "No data found" alert when dataNotFound is true', () => {
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce(true);
    useDispatch.mockReturnValue(jest.fn());

    render(<FileList />);

    expect(screen.getByText('No data found for the specified file.')).toBeInTheDocument();
  });
});
