import {Module} from 'vuex';
import {IVueI18n} from 'vue-i18n';
import {ALERT} from './getter-types';
import {RESET_ALERT, SET_ALERT} from './mutation-types';

export enum AlertType {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  HINT = 'HINT'
}

interface IAlertItemLink {
  text: string;
  method: () => {};
}

export interface IAlertItem {
  text: string;
  type: AlertType;
  noCloseBtn?: boolean;
  link?: IAlertItemLink;
  i18n?: IVueI18n;
}

interface IAlertState {
  alert: IAlertItem | null;
}

const alertState: Module<IAlertState, {}> = {
  state: {
    alert: null
  },
  mutations: {
    [SET_ALERT](state, payload: IAlertItem) {
      state.alert = payload;
    },
    [RESET_ALERT](state) {
      state.alert = null;
    }
  },
  getters: {
    [ALERT]: state => state.alert
  }
};

export default alertState;
