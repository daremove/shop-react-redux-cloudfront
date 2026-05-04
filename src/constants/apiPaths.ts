const API_PATHS = {
  product: `https://${
    import.meta.env.VITE_PRODUCT_API_PREFIX
  }.execute-api.eu-west-1.amazonaws.com/dev`,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: `https://${
    import.meta.env.VITE_IMPORT_API_PREFIX
  }.execute-api.eu-west-1.amazonaws.com/dev`,
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
