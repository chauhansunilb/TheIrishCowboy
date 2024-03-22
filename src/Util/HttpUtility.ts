async function apiRequest<T>(
  endpoint: string,
  method: string = 'GET',
  data: any = null,
): Promise<T> {
  const url = `${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseData: any = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }
      return responseData;
    } else {
      const responseData: any = await response.text();
      return responseData;
    }
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
}

export async function getRequest<T>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, 'GET');
}

export async function postRequest<T>(endpoint: string, data: any): Promise<T> {
  return apiRequest<T>(endpoint, 'POST', data);
}
