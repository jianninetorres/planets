export enum ACTION_TYPES {
  HOVER,
  NOT_HOVER,
}

interface Payload {
  onHoveredPlanet: string;
  hoverColor: string;
}

interface State extends Payload {
  hover: boolean;
}

export const INITIAL_STATE = {
  hover: false,
  onHoveredPlanet: "",
  hoverColor: "",
};

export const planetListItemReducer = (
  state: State,
  action: { type: ACTION_TYPES; payload: Payload }
) => {
  switch (action.type) {
    case ACTION_TYPES.HOVER:
      return {
        hover: true,
        onHoveredPlanet: action.payload?.onHoveredPlanet,
        hoverColor: action.payload?.hoverColor,
      };
    case ACTION_TYPES.NOT_HOVER:
      return {
        ...state,
        hover: false,
      };
    default:
      return state;
  }
};
