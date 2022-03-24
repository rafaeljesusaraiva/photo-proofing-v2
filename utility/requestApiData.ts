export type requestApiDataType = {
  url: string;
  urlParams?: string | string[];
  loadingState: React.Dispatch<React.SetStateAction<boolean>>;
  errorState: any;
  errorSetState: React.Dispatch<React.SetStateAction<any>>;
  dataState: any;
  dataSetState: React.Dispatch<React.SetStateAction<any>>;
};

export async function requestApiData({
  url,
  urlParams,
  loadingState,
  errorState,
  errorSetState,
  dataState,
  dataSetState,
}: requestApiDataType) {
  loadingState(true);
  try {
    const response = await fetch(url + urlParams);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    let actualData = await response.json();
    if (actualData != dataState) {
      dataSetState(actualData);
      errorSetState(null);
    }
  } catch (err: any) {
    if (err.message !== errorState) {
      errorSetState(err.message);
      dataSetState(null);
    }
  } finally {
    loadingState(false);
  }
}
