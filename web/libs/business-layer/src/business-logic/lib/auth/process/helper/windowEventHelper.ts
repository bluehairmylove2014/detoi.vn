export const googlePopupPostMessage = (type: string, payload: any): void => {
  if (typeof window !== "undefined") {
    window.opener?.postMessage(
      {
        type,
        payload,
      },
      window.location.origin
    );
  }
};

export const facebookPopupPostMessage = (type: string, payload: any): void => {
  if (typeof window !== "undefined") {
    window.opener?.postMessage(
      {
        type,
        payload,
      },
      window.location.origin
    );
  }
};
