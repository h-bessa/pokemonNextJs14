import React, {useState} from 'react';
import {Button, Space, Table, TableProps, Tag} from 'antd';
import {getPokemonTypeColor} from "@/utils/getPokemonTypeColor";
import {Pokemon, PokemonKeys} from "@/interfaces/pokemon";
import {useRouter} from "next/navigation";
import {calculatePower} from "@/utils/calculatePower";
import {getStats} from "@/utils/getStats";
import {EyeOutlined} from "@ant-design/icons";

type ColumnsType<T extends object> = TableProps<T>['columns'];

interface PokemonsTableProps {
  pokemons: Pokemon[]
}

const PokemonsTable = ({pokemons}: PokemonsTableProps) => {
  const router = useRouter()
  const [loadingButtons, setLoadingButtons] = useState<Record<number, boolean>>({});

  const handleButtonClick = (id: number) => {
    setLoadingButtons((prevState) => ({...prevState, [id]: true}));
    router.push(`/pokemon/${id}`);
  };

  const columns: ColumnsType<Pokemon> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: (type: string[]) => (
        <span>
        {type.map((_type, index) => {
          return (
            <Tag color={getPokemonTypeColor(_type)} key={index}>
              {_type}
            </Tag>
          );
        })}
      </span>
      ),
    },
    {
      title: 'Stats',
      key: 'stats',
      render: (_, record) => {
        const stats = getStats(record, [PokemonKeys.id, PokemonKeys.type]);
        return (
          <span>
            {stats.map((stat, index) => (
              <Tag key={index}>
                {stat.label}: {stat.value}
              </Tag>
            ))}
          </span>
        );
      },
    },
    {
      title: 'Power',
      dataIndex: 'power',
      key: 'power',
      render: (_, record) => (calculatePower(record))
    },
    {
      title: 'See details',
      key: 'details',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary' data-testid='see-details' onClick={() => handleButtonClick(record.id)} loading={loadingButtons[record.id]} icon={<EyeOutlined />}/>
        </Space>
      ),
    },
  ];

  return (
    <Table<Pokemon>
      style={{width: '90%'}}
      columns={columns}
      pagination={{position: ["bottomCenter"]}}
      dataSource={pokemons}
      rowKey="id"
    />
  );
}

export default PokemonsTable