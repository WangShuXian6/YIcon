import isonFetch from 'isom-fetch';
import {
  FETCH_REPOS,
  FETCH_PROJECTS,
  UPDATE_REPO_OWNER,
  UPDATE_PROJECT_OWNER,
  CREATE_REPO,
  FETCH_SEARCH_REPOS,
  FETCH_SEARCH_PROJECTS,
  FETCH_SUPER_MANAGER,
  CREATE_SUPER_MANAGER,
  DELETE_SUPER_MANAGER,
  FETCH_DISABLED_CODE,
  SET_DISABLED_CODE,
  UNSET_DISABLED_CODE,
  UPDATE_DISABLED_CODE,
} from '../constants/actionTypes';

const fetch = isonFetch.create({ baseURL: '/api' });
export function fetchAllRepo(pageNum, pageSize) {
  return {
    type: FETCH_REPOS,
    payload: fetch.get(`/admin/repositories/all?currentPage=${pageNum}&pageSize=${pageSize}`),
  };
}

export function fetchAllProject(pageNum, pageSize) {
  return {
    type: FETCH_PROJECTS,
    payload: fetch.get(`/admin/projects/all?currentPage=${pageNum}&pageSize=${pageSize}`),
  };
}

export function updateRepoOwner(repoId, param) {
  return {
    type: UPDATE_REPO_OWNER,
    payload: fetch.patch(`/admin/repositories/${repoId}/repo`, param),
  };
}

export function updateProjectOwner(projectId, param) {
  return {
    type: UPDATE_PROJECT_OWNER,
    payload: fetch.patch(`/admin/projects/${projectId}/peoject`, param),
  };
}

export function createRepo(param) {
  return {
    type: CREATE_REPO,
    payload: fetch.post('/admin/repositories', param),
  };
}

export function searchRepos(name, pageNum, pageSize) {
  return {
    type: FETCH_SEARCH_REPOS,
    payload:
      fetch.get(`/admin/repositories/all/${name}/?currentPage=${pageNum}&pageSize=${pageSize}`),
  };
}

export function searchProjects(name, pageNum, pageSize) {
  return {
    type: FETCH_SEARCH_PROJECTS,
    payload:
      fetch.get(`/admin/projects/all/${name}/?currentPage=${pageNum}&pageSize=${pageSize}`),
  };
}

export function fetchSuperManager() {
  return {
    type: FETCH_SUPER_MANAGER,
    payload: fetch.get('/admin/manager/list'),
  };
}

export function createSuperManager(id) {
  return {
    type: CREATE_SUPER_MANAGER,
    payload: fetch.post(`/admin/manager/${id}`),
  };
}

export function deleteSuperManager(id) {
  return {
    type: DELETE_SUPER_MANAGER,
    payload: fetch.delete(`/admin/manager/${id}`),
  };
}

export function fetchDisabledCode() {
  return {
    type: FETCH_DISABLED_CODE,
    payload: fetch.get('/admin/disabledCode'),
  };
}

export function setDisabledCode(param) {
  return {
    type: SET_DISABLED_CODE,
    payload: fetch.post('/admin/disabledCode', param),
  };
}

export function unsetDisabledCode(id) {
  return {
    type: UNSET_DISABLED_CODE,
    payload: fetch.patch(`/admin/disabledCode/${id}`),
  };
}

export function updateDisabledCode(param) {
  return {
    type: UPDATE_DISABLED_CODE,
    payload: fetch.post('/admin/disabledCode/description', param),
  };
}
