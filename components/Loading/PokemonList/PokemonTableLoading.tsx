import { Skeleton } from 'antd';

const PokemonTableLoading = () => {

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <Skeleton.Node active={true} style={{ width: "1000px", height: "800px"}} />
    </div>
  );
};

export default PokemonTableLoading;
