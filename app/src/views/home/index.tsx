// Next, React
import { FC } from 'react';
import { CandyMint } from 'components/CandyMint';

export const HomeView: FC = ({ }) => {
  return (

    <div className="md:hero mx-auto p-4 min-w-max">
        <CandyMint/>
    </div>
  );
};
