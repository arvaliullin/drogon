import axios from 'axios';
import { GlossaryTerm, GlossaryGraph } from '../types';

const apiClient = axios.create({
  baseURL: `http://${window.location.host}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllTerms = async (): Promise<GlossaryTerm[]> => {
  const response = await apiClient.get<GlossaryTerm[]>('/terms');
  return response.data;
};

export const getTerm = async (term: string): Promise<GlossaryTerm> => {
  const response = await apiClient.get<GlossaryTerm>(`/terms/${term}`);
  return response.data;
};

export const createTerm = async (term: GlossaryTerm): Promise<GlossaryTerm> => {
  const response = await apiClient.post<GlossaryTerm>('/terms', term);
  return response.data;
};

export const updateTerm = async (term: GlossaryTerm): Promise<GlossaryTerm> => {
  const response = await apiClient.put<GlossaryTerm>(`/terms/${term.id}`, term);
  return response.data;
};

export const deleteTerm = async (term: string): Promise<void> => {
  await apiClient.delete(`/terms/${term}`);
};

export const getGlossaryGraph = async (): Promise<GlossaryGraph> => {
  const response = await apiClient.get<GlossaryGraph>('/graph');
  return response.data;
};
