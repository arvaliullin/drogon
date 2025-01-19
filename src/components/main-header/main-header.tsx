import Button from '@mui/material/Button';

interface MainHeaderProps {
  setActiveComponent: (component: 'list' | 'graph') => void;
}

function MainHeader({ setActiveComponent }: MainHeaderProps){
  return (
    <header>
      <Button variant="contained" color="primary" onClick={() => setActiveComponent('list')}>
        Глоссарий
      </Button>
      <Button variant="contained" color="primary" onClick={() => setActiveComponent('graph')}>
        Семантический граф
      </Button>
    </header>
  );
};

export default MainHeader;
