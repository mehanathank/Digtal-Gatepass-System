// Dummy API service for future backend integration
// Replace these functions with actual API calls when backend is ready

export const loginUser = async (role, credentials) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, user: credentials });
    }, 500);
  });
};

export const fetchGatePasses = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
};

export const createGatePass = async (passData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, passId: 'GP' + Date.now() });
    }, 500);
  });
};

export const updateGatePassStatus = async (passId, status) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};
