import ReactReconciler from "react-reconciler";
import { createElement, getHostContextNode } from "./createElement";

const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: (instence) => {
    return getHostContextNode(instence);
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    createElement(type, newProps);
    return rootContainerInstance;
  },
  appendAllChildren() {},
  createTextInstance: (text) => {},
  appendInitialChild: (parent, child) => {},
  appendChild(parent, child) {},
  finalizeInitialChildren: (domElement, type, props) => {},
  appendChildToContainer: (parent, child) => {},
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  supportsMutation: true,
  commitUpdate(canvasElement, updatePayload, type, oldProps, newProps) {},
  commitTextUpdate(textInstance, oldText, newText) {},
  removeChild(parentInstance, child) {},
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

export const render = (reactElement, canvasElement, callback) => {
  // Create a root Container if it doesnt exist
  if (!canvasElement._rootContainer) {
    canvasElement._rootContainer = ReactReconcilerInst.createContainer(
      canvasElement,
      false
    );
  }

  // update the root Container
  return ReactReconcilerInst.updateContainer(
    reactElement,
    canvasElement._rootContainer,
    null,
    callback
  );
};
