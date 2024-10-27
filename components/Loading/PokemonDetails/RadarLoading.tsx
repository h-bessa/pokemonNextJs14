import {Skeleton} from 'antd';
import {DotChartOutlined} from "@ant-design/icons";

const RadarLoading = () => {
  return (
        <Skeleton.Node active={true} style={{width:'400px', height:'400px'}}>
          <DotChartOutlined style={{fontSize: 50, color: '#bfbfbf' }} />
        </Skeleton.Node>
  );
};

export default RadarLoading;
