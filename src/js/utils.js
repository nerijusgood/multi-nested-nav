export function getActiveBreakpoint () {
  return window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content').replace(/['"]/g, '');
}

export function forEach (array, callback, scope) {
  for (let i = 0, len = array.length; i < len; i++) {
    callback.call(scope, i, array[i]);
  }
}
