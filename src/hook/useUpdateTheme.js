import { ref, nextTick } from 'vue'

const all = {
  colors: {
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
};

const convertCamelCaseToDashes = (str, prefix = '') => {
  let s = [...str];
  s.map((l, i) => {
    if (l === l.toUpperCase() && isNaN(l)) {
      s[i] = '-' + l.toLowerCase();
    }
  });
  return `${prefix ? `${prefix}-` : ''}${s.join('')}`;
};

// Poor man's “Object.fromString()” 😅
const createObjectFromString = (str) => {
  // return eval(`(function () { return ${str}; })()`);
  const fn = new Function(`return ${str};`);
  return fn();
}

const isObject = (variable) => {
  return Object.prototype.toString.call(variable) === '[object Object]';
};

const convertObjectToCustomPropertiesObject = (obj, prefix = '') => {
  const toReturn = {};

  Object.entries(obj).map(([key, value]) => {
    const customPropertyName = convertCamelCaseToDashes(key, prefix);
    if (isObject(value)) {
      const flattenedValues = convertObjectToCustomPropertiesObject(value, customPropertyName);
      Object.entries(flattenedValues).map(([fCustomPropertyName, fValue]) => {
        toReturn[`${fCustomPropertyName}`] = fValue;
      });
    } else {
      toReturn[`--${customPropertyName}`] = value;
    }
  });

  return toReturn;
}

const convertObjectToCustomPropertiesString = (obj, prefix = '') => {
  let toReturn = '';

  const asObject = convertObjectToCustomPropertiesObject(obj, prefix);

  for (let [key, value] of Object.entries(asObject)) {
    toReturn += `${key}: ${value};
`;
  }

  return toReturn.trim();
}

export default function () {
  const input = createObjectFromString(document.querySelector('#input').value);
  const output = convertObjectToCustomPropertiesString(input);

  return {
    isShow,
    render,
  }
}