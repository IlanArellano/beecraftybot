export const endpointSchema = ({ res, error }) => {
  return {
    response: res ?? null,
    error: error ?? null,
  };
};
