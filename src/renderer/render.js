import ReactReconciler from "react-reconciler";
import { createElement, getHostContextNode } from "./createElement";

const childHostContext = {};

const hostConfig = {
  now: Date.now, // 时间戳用于区分渲染桢
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
  // React.createElement
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
  createTextInstance: (text) => {},
  appendInitialChild: (parent, child) => {},
  // componentDidMount
  appendChild(parent, child) {},
  appendAllChildren() {},
  finalizeInitialChildren: (domElement, type, props) => {},
  appendChildToContainer: (parent, child) => {},
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  supportsMutation: true,
  // componentsDidUpdate
  commitUpdate(canvasElement, updatePayload, type, oldProps, newProps) {},
  commitTextUpdate(textInstance, oldText, newText) {},
  // componentWillUnmount
  removeChild(parentInstance, child) {},
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

export const render = (reactElement, container, callback) => {
  // 全局渲染器的单例
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(
      container,
      false
    );
  }

  // update the root Container
  ReactReconcilerInst.updateContainer(
    reactElement,
    container._rootContainer,
    null,
    callback
  );
};
