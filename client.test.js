const fetch = import('node-fetch');
const fetchMock = import('jest-fetch-mock');

fetchMock.enableMocks();

import fetchMock from 'jest-fetch-mock';

// Mock the fetch function
fetchMock.enableMocks();

describe('fetchExample', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should handle a successful fetch request', async () => {
    const mockResponse = { data: 'Test data' };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse), { status: 200 });

    const { default: fetchExample } = await import('./fetchExample');

    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data');
    expect(await fetchExample()).toEqual(mockResponse);
  });

  it('should handle a failed fetch request', async () => {
    const errorMessage = 'Request failed with status code 404';
    fetchMock.mockResponseOnce('', { status: 404, statusText: 'Not Found' });

    try {
      await import('./fetchExample');
    } catch (error) {
      expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data');
      expect(error.message).toEqual(errorMessage);
    }
  });
});
