export const getPokemonTypeColor = (type: string): string => {
  switch (type) {
    case 'Grass':
      return '#73d13d';
    case 'Poison':
      return '#d4380d';
    case 'Fire':
      return '#ff4d4f';
    case 'Water':
      return '#13c2c2';
    case 'Bug':
      return '#bae637';
    case 'Flying':
      return '#1677ff';
    case 'Normal':
      return '#d9d9d9';
    case 'Electric':
      return '#faad14';
    case 'Ground':
      return '#d48806';
    case 'Fighting':
      return '#ff7a45';
    case 'Psychic':
      return '#597ef7';
    case 'Rock':
      return '#876800';
    case 'Ice':
      return '#135200';
    case 'Ghost':
      return '#722ed1';
    case 'Dragon':
      return '#2f54eb';
    case 'Dark':
      return '#22075e';
    case 'Steel':
      return '#85a5ff';
    case 'Fairy':
      return '#ffadd2';
    default:
      return '#000000';  }
};
