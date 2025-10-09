exports.create = (data) => {
  const errors = [];
  if (!data.name) errors.push('name required');
  return errors;
};