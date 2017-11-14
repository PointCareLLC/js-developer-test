
const colors = {
  mauv: '#E0B0FF',
  puce: '#CC8899',
  blue: 'blue',
  purple: 'purple',
  violet: 'violet',
  orange: 'orange',
  indigo: 'indigo',
  red: 'red',
  crimson: 'crimson',
  teal: 'teal',
  turquoise: 'turquoise',
  yellow: 'yellow'
}

const getSwatchColor = (color) => {
  return colors[color] || 'white'
};

export default getSwatchColor;
