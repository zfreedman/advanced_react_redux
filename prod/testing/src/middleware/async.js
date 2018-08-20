export default ({ dispatch }) => next => action => {
  // check to see if action's payload is not a promise
  if (action.payload === undefined || action.payload.then == undefined)
    return next(action);

  // otherwise, wait for promise to resolve
  action.payload.then(resp => {
    const newAction = {
      ...action,
      payload: resp,
    };

    dispatch(newAction);
  });
}
