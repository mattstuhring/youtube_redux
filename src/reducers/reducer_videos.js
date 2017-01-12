import { VIDEO_SEARCH } from '../actions/action_video_search';

export default function(state = [], action) {
  switch (action.type) {
    case VIDEO_SEARCH:
      return action.payload.data.items;
  }

  return state;
}
