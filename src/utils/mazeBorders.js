const mazeBorders = [
  ['border-t-8 border-l-8 border-b-4', 'border-t-8', 'border-t-8 border-r-4', 'border-t-8 border-l-4 border-b-4', 'border-t-8 border-r-4', 'border-t-8 border-l-4', 'border-t-8 border-r-4', 'border-t-8 border-l-4 border-b-4', 'border-t-8 border-b-4', 'border-t-8'],
  ['border-l-8 border-t-4 border-r-4', 'border-l-4 border-r-4', 'border-l-4 border-b-4', 'border-t-4 border-r-4', 'border-l-4', 'border-r-4', 'border-l-4 border-b-4', 'border-t-4 border-b-4', 'border-t-4', 'border-r-8 border-b-4'],
  ['border-l-8 border-r-4', 'border-l-4 border-b-4', 'border-t-4 border-r-4', 'border-l-4 border-b-4', 'border-b-4 border-r-4', 'border-l-4', 'border-t-4 border-r-4 border-b-4', 'border-t-4 border-l-4', 'border-r-4 border-b-4', 'border-t-4 border-l-4 border-r-8'],
  ['border-l-8', 'border-t-4 border-r-4 border-b-4', 'border-l-4 border-b-4', 'border-t-4', 'border-t-4 border-r-4 border-b-4', 'border-l-4 border-r-4', 'border-t-4 border-l-4', 'border-r-4 border-b-4', 'border-t-4 border-l-4 border-b-4', 'border-r-8'],
  ['border-l-8 border-r-4', 'border-t-4 border-l-4', 'border-t-4 border-b-4', 'border-r-4 border-b-4', 'border-t-4 border-l-4', 'border-r-4 border-b-4', 'border-l-4 border-r-4 border-b-4', 'border-t-4 border-l-4', 'border-t-4', 'border-r-8 border-b-4'],
  ['border-l-8 border-r-4', 'border-l-4 border-b-4', 'border-t-4 border-r-4', 'border-t-4 border-l-4 border-r-4', 'border-l-4 border-b-4', 'border-t-4', 'border-t-4 border-r-4 border-b-4', 'border-l-4 border-r-4', 'border-l-4 border-r-4', 'border-t-4 border-l-4 border-r-8'],
  ['border-l-8 border-b-4', 'border-t-4 border-b-4', 'border-r-4', 'border-l-4', 'border-t-4 border-r-4 border-b-4', 'border-l-4', 'border-t-4 border-b-4', 'border-r-4 border-b-4', 'border-l-4 border-r-4', 'border-l-4 border-r-8'],
  ['border-t-4 border-l-8', 'border-t-4 border-b-4', 'border-r-4 border-b-4', 'border-l-4 border-r-4', 'border-t-4 border-l-4 border-r-4', 'border-l-4 border-r-4', 'border-t-4 border-l-4', 'border-t-4', 'border-b-4', 'border-r-8 border-b-4'],
  ['border-l-8 border-r-4', 'border-t-4 border-l-4 border-b-4', 'border-t-4 border-b-4', 'border-r-4', 'border-l-4', 'border-b-4', 'border-r-4', 'border-l-4 border-r-4 border-b-4', 'border-t-4 border-l-4', 'border-t-4 border-r-8'],
  ['border-b-8', 'border-t-4 border-b-8', 'border-t-4 border-b-8', 'border-b-8', 'border-b-8', 'border-t-4 border-r-4 border-b-8', 'border-l-4 border-b-8', 'border-t-4 border-b-8', 'border-r-4 border-b-8', 'border-r-8 border-l-4 border-b-8'],
];

export default mazeBorders;