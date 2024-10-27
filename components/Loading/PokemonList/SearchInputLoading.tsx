import {Skeleton} from 'antd';

const SearchInputLoading = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom:'100px', marginTop:'100px'}}>
      <Skeleton.Input active={true} style={{width: "50px", marginBottom: '5px'}}/>
      <Skeleton.Input active={true} style={{width: "400px", marginBottom: '20px'}}/>
      <Skeleton.Input active={true} style={{width: "50px", marginBottom: '5px'}}/>
      <Skeleton.Input active={true} style={{width: "400px", marginBottom: '20px'}}/>
      <div style={{display: 'flex', gap:"30px", alignItems: 'center', justifyContent: 'center'}}>
        <Skeleton.Button active={true} shape={"round"}/>
        <Skeleton.Button active={true} shape={"round"}/>
        <Skeleton.Button active={true} shape={"round"}/>
      </div>
    </div>
  );
};

export default SearchInputLoading;
