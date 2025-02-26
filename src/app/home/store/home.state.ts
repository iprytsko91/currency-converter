import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { CurrencyConvertResult } from "../../models";
import { AddCurrencyConvertResult } from "./home.actions";

export interface HomeStateModel {
  history: CurrencyConvertResult[];
}

const DefaultState: HomeStateModel = {
  history: []
}

@State<HomeStateModel>({
  name: 'home',
  defaults: DefaultState
})
@Injectable()
export class HomeState {

  @Selector()
  static history(state: HomeStateModel): CurrencyConvertResult[] {
    return state.history;
  }

  @Action(AddCurrencyConvertResult)
  addCurrencyConvertResult(ctx: StateContext<HomeStateModel>, action: AddCurrencyConvertResult) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      history: [action.payload, ...state.history]
    });
  }
}
