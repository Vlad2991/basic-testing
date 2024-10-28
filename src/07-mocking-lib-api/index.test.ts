 import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const mockAxiosInstance = axios.create();

  beforeAll(() => {
    mockAxiosInstance.get = jest.fn();
    axios.create = jest.fn(() => mockAxiosInstance);
  });

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://api.example.com';
    await throttledGetDataFromApi(baseURL, '/test');
    
    expect(axios.create).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    const url = '/test-endpoint';
    await throttledGetDataFromApi('https://api.example.com', url);

    expect(mockAxiosInstance.get).toHaveBeenCalledWith(url);
  });

  test('should return response data', async () => {
    const responseData = { data: 'test data' };
    mockAxiosInstance.get.mockResolvedValue(responseData);
    
    const result = await throttledGetDataFromApi('https://api.example.com', '/test');

    expect(result).toBe(responseData.data);
  });
});