// Basic placeholder validators
exports.register = (data) => {
  const errors = [];
  if (!data.email) errors.push('email required');
  if (!data.password) errors.push('password required');
  return errors;
};