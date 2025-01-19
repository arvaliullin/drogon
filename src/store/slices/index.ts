import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTerms, getGlossaryGraph } from '../../api/api';
import { GlossaryTerm, GlossaryGraph } from '../../types';


export const fetchTerms = createAsyncThunk<GlossaryTerm[]>('glossary/fetchTerms', async () => {
  const terms = await getAllTerms();
  return terms;
});

export const fetchGlossaryGraph = createAsyncThunk<GlossaryGraph>('glossary/fetchGlossaryGraph', async () => {
  const graph = await getGlossaryGraph();
  return graph;
});

const glossarySlice = createSlice({
  name: 'glossary',
  initialState: {
    terms: [] as GlossaryTerm[],
    graph: null as GlossaryGraph | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTerms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTerms.fulfilled, (state, action) => {
        state.loading = false;
        state.terms = action.payload;
      })
      .addCase(fetchTerms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch terms';
      })
      .addCase(fetchGlossaryGraph.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGlossaryGraph.fulfilled, (state, action) => {
        state.loading = false;
        state.graph = action.payload;
      })
      .addCase(fetchGlossaryGraph.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch graph';
      });
  },
});

export default glossarySlice.reducer;
