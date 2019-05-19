const emailReg = new RegExp(
  '^[a-zA-Z][a-zA-Z0-9_\\-\\.]{0,}@[a-zA-Z0-9]{1,}[\\-]{0,}[a-zA-Z0-9]{1,}(\\.[a-z0-9]{2,4}){1,3}$',
);

export default {
  emailReg,
};
