import React from 'react';
import {Card, Col, Row} from 'antd';
import {Pokemon} from "@/interfaces/pokemon";
import PokemonDetails from "@/components/PokemonDetails";
import PokemonRadar from "@/components/Chart/PokemonRadar";
import styled from 'styled-components';
import {useRouter} from 'next/navigation';
import {BACK, NEXT, PREVIOUS} from "@/constants";
import {usePokemonContext} from "@/context/PokemonProvider";
import Button from "@/components/Button/Button";

const CenteredRow = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PokemonCard = styled(Card)`
    height: 100%;
    display: flex;
    max-width: 800px;
    flex-direction: column;
`;

interface PokemonPageProps {
  pokemon: Pokemon;
  id: string;
}

const PokemonInfoContainer = ({pokemon, id}: PokemonPageProps) => {
  const router = useRouter();
  const parsedId = parseInt(id)
  const {maxPokemonsStat, pokemonsLength} = usePokemonContext();

  const handleBackToHome = () => {
    router.push('/');
  };

  const handlePrevious = () => {
    const previousId = parsedId - 1;
    if (previousId >= 1) {
      router.push(`/pokemon/${previousId}`);
    }
  };


  const handleNext = () => {
    const nextId = parsedId + 1;
    router.push(`/pokemon/${nextId}`);
  };


  return (
    <div style={{ margin: '0 auto'}}>
      <CenteredRow>
        <Button type="primary" onClick={handlePrevious} disabled={parsedId <= 1}>
          {PREVIOUS}
        </Button>
        <Row gutter={16} justify={'center'}>
          <Col span={10}>
            <PokemonCard loading={!Boolean(pokemon.id)} title="Pokemon Details" bordered={false}>
              <PokemonDetails pokemon={pokemon}/>
            </PokemonCard>
          </Col>
          <Col span={10}>
            <PokemonCard title="Pokemon Stats Radar" bordered={false}>
                <PokemonRadar pokemon={pokemon} maxPokemonsStat={maxPokemonsStat}/>
            </PokemonCard>
          </Col>
        </Row>
        <Button type="primary" onClick={handleNext} disabled={parsedId == pokemonsLength}>
          {NEXT}
        </Button>
      </CenteredRow>
      <CenteredRow style={{marginTop: '20px'}}>
        <Button type="default" onClick={handleBackToHome} content={BACK}>
          {BACK}
        </Button>
      </CenteredRow>
    </div>
  );
};

export default PokemonInfoContainer;
