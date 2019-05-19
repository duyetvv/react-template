import { i18n } from 'i18n';
import { getLang } from 'helpers';
import { emailReg } from './regex';

const lang = getLang();
const { messagea, fields } = i18n[lang];

const getValidateMessage = ({ fieldName, message }) =>
  message.replace('{fieldName}', fields[fieldName]);

const { required, email } = messagea;

const validateRules = {
  required: {
    test: val => val.length > 0,
    message: name => getValidateMessage({ fieldName: name, message: required }),
  },
  email: {
    test: val => !val || emailReg.test(val),
    message: name => getValidateMessage({ fieldName: name, message: email }),
  },
};

export default type => (val, name, arg = null) => ({
  isValid: validateRules[type].test(val, arg),
  message: validateRules[type].message(name, arg),
});
