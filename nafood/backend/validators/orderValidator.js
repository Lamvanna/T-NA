exports.create = (data) => {
  const errors = [];
  if (!data.items || !data.items.length) errors.push('items required');
  return errors;
};