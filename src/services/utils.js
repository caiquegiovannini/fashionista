export function formatNameToParamUrl(name) {
  const param = 
    name.split(' ')
      .join('-')
      .toLowerCase();

  return param;
}

export function formatParamUrlToName(param) {
  let name = 
    param.split('-')
      .join(' ')
      .toUpperCase();
  
  if (name.includes('T SHIRT')) {
    name = name.replace('T SHIRT', 'T-SHIRT');
  }
  
  return name;
}