export const getDashboardUrl = () => "/dashboard";

export const getAllBikeUrl = () => `${getDashboardUrl()}/allBike`;
export const getOneBikeUrl = (id) => `${getDashboardUrl()}/bike/${id}`;
export const getCreateBikeUrl = () => `${getDashboardUrl()}/createBike`;
export const getUpdateBikeUrl = (id) => `${getDashboardUrl()}/updateBike/${id}`;