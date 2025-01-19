import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainHeader from '../../components/main-header/main-header';
import GlossaryList from '../../components/glossary-list/glossary-list';
import GlossaryGraphFlow from '../../components/glossary-graph-flow/glossary-graph-flow';
import { fetchTerms, fetchGlossaryGraph } from '../../store/actions';
import { RootState, AppDispatch } from '../../store';
import Spinner from '../../components/spinner/spinner';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
});

function MainPage() {
  const [activeComponent, setActiveComponent] = useState<'list' | 'graph'>('list');
  const dispatch: AppDispatch = useDispatch();
  const terms = useSelector((state: RootState) => state.glossary.terms);
  const graph = useSelector((state: RootState) => state.glossary.graph);
  const loading = useSelector((state: RootState) => state.glossary.loading);
  const error = useSelector((state: RootState) => state.glossary.error);

  useEffect(() => {
    dispatch(fetchTerms());
    dispatch(fetchGlossaryGraph());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainHeader setActiveComponent={setActiveComponent} />
        {loading && <Spinner />}
        {error && <p>{error}</p>}
        {activeComponent === 'list' ? <GlossaryList terms={terms} /> : graph && <GlossaryGraphFlow graph={graph} />}
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
